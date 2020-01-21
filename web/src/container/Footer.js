import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  width: 270px;
  float: left;
  position: fixed;
  bottom: 35px;
  -webkit-font-smoothing: subpixel-antialiased;

  @media print, screen and (max-height: ${p => p.screenMd}) {
    top: 620px;
  }

  @media print, screen and (max-width:${p => p.screenLg}) {
    float: none;
    position: static;
    width: auto;
  }
`;

function Footer() {
  return (
    <Foot>
      <p>
        <small>
          Hosted on GitHub Pages
            <br />
          &mdash; Base Theme by
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/orderedlist">orderedlist</a>
          <br />
          &mdash; Base Design by
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/lulalachen">lulalachen</a>
        </small>
      </p>
    </Foot>
  );
}

export default Footer;

// class Footer extends Component {
//   constructor(props) {
//     super(props);
//     this.t = this.props.t;
//   }

//   render() {
//     return (
//       <footer id='footer'>
//         <p>
//           <small>
//             Hosted on GitHub Pages
//             <br />
//             &mdash; Base Theme by
//             <a rel="noopener noreferrer" target="_blank" href="https://github.com/orderedlist">orderedlist</a>
//             <br />
//             &mdash; Base Design by
//             <a rel="noopener noreferrer" target="_blank" href="https://github.com/lulalachen">lulalachen</a>
//           </small>
//         </p>
//       </footer>
//     );
//   }
// }

// Footer.propTypes = {}

// const mapStateToProps = state => {
//   return {
//   }
// }

// export default withTranslation()(connect(mapStateToProps)(Footer));
