import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { View } from 'react-native';
import RippleFeedback from 'react-native-material-ui/src/RippleFeedback';

class RippleLink extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { to, style, children } = this.props;
    const linkStyle = {
      color: 'white',
      textDecoration: 'none',
      height: '100%',
      ...style,
    };
    return (
      <Link to={to} style={linkStyle}>
        <RippleFeedback
          style={{ height: '100%' }}
          delayPressIn={50}
          color="#f5f5f580"
        >
          <View
            style={{
              height: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
            }}
          >
            {children}
          </View>
        </RippleFeedback>
      </Link>
    );
  }
}

RippleLink.propTypes = {
  to: PropTypes.string,
  style: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RippleLink;
