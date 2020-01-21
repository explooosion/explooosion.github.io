import React from 'react';
import './App.scss';

import ReactFlagsSelect from 'react-flags-select';

import Header from './container/Header';
import Footer from './container/Footer';
import Section from './container/Section';

function App() {

  const onSelectFlag = (e) => {
    console.log('onSelectFlag', e)
  }

  return (
    <div id='wrapper'>
      <ReactFlagsSelect
        className='flag-select'
        defaultCountry={'US'}
        countries={['US', 'TW', 'CN']}
        customLabels={{ 'US': 'English', 'TW': 'Traditional Chinese', 'CN': 'Simplified Chinese' }}
        selectedSize={30}
        showSelectedLabel={false}
        onSelect={(e) => onSelectFlag(e)}
      />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.dispatch = props.dispatch;
//     this.state = {
//       countries: props.settings.countries,
//       customLabels: props.settings.customLabels,
//       transDefault: props.settings.locale,
//     }
//   }

//   onSelectFlag(countryCode) {
//     this.dispatch(setLocal({ locale: countryCode }));
//   }


//   render() {

//     return (
//       <HashRouter>
//         <div id='wrapper'>
//           <ReactFlagsSelect
//             className='flag-select'
//             defaultCountry={this.state.transDefault}
//             countries={this.state.countries}
//             customLabels={this.state.customLabels}
//             selectedSize={30}
//             showSelectedLabel={false}
//             onSelect={(e) => this.onSelectFlag(e)}
//           />
//           <Header />
//           <Section />
//           <Footer />
//         </div>
//       </HashRouter>
//     );
//   }
// }

// App.propTypes = {}

// const mapStateToProps = state => {
//   return {
//     settings: state.settings,
//   }
// }

// export default connect(mapStateToProps)(App);
