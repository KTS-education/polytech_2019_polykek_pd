import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

class Avatar extends React.Component {
    static propTypes = {
      img: PropTypes.string.isRequired,
      sm: PropTypes.bool,
      md: PropTypes.bool,
      lg: PropTypes.bool,
    };

    static defaultProps = {
      sm: true,
      md: false,
      lg: false,
    };

    render() {
      const {
        img, sm, md, lg,
      } = this.props;
      const boxClass = `Avatar__box${(sm) ? ' Avatar__box_sm' : ''}${(md) ? ' Avatar__box_md' : ''}${(lg) ? ' Avatar__box_lg' : ''}`;
      const imgClass = `Avatar__img${(sm) ? ' Avatar__img_sm' : ''}${(md) ? ' Avatar__img_md' : ''}${(lg) ? ' Avatar__img_lg' : ''}`;
      return (
        <div className={boxClass}>
          <img className={imgClass} src={img} alt="avatar" />
        </div>
      );
    }
}

export default Avatar;
