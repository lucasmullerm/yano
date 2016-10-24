import React                from 'react';
import { FormattedMessage } from 'react-intl';
import Config               from 'Config';

import Box     from 'grommet/components/Box';
import Button  from 'grommet/components/Button';
import Layer   from 'grommet/components/Layer';
import Menu    from 'grommet/components/Menu';
import Section from 'grommet/components/Section';

// TODO: Review Icons (was not updated)
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import GoogleIcon   from 'grommet/components/icons/base/SocialGoogle';
import EmailIcon    from 'grommet/components/icons/base/SocialEmail';

const OPTIONS = [ { platform: "facebook" , text: "login.facebook" , icon: (<FacebookIcon /> )},
                  { platform: "google"   , text: "login.google"   , icon: (<GoogleIcon   /> )},
                  { platform: "email"    , text: "login.email"    , icon: (<EmailIcon    /> )}];

export default class LoginLayer extends React.Component {

    constructor (props) {
        super(props);
        this._login = this._login.bind(this);
    }

    _login(platform) {
        window.open(Config.loginBaseURL + platform, "", "width=600,height=400");
        window.loginCallBack = (responseData, err) => {
            // if firstTime: GOTO Edit Profile

            console.log(responseData);
        };
    }

    render () {

        // TODO: change interface
        const links = (
            OPTIONS.map(op => ( 
                    <Button
                    key={op.platform}
                    onClick={() => this._login(op.platform)}
                    icon={op.icon}
                    fill={false}
                    label={<FormattedMessage id={op.text}/>} />
                )));

        let layer = (
            <Layer closer={true} align="center" hidden={this.props.hidden} onClose={this.props.onClose}>
                <Section>
                    <Box pad="medium" justify="start">
                        <Menu inline={true} direction="column">
                            {links}
                        </Menu>
                    </Box>
                </Section>
            </Layer>
            );

        return layer;
    }
}
