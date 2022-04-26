import TokunaiMeter from './components/TokunaiMeter';
import RowInput from './components/RowInput';
import Rows from './components/Rows';
import IcToggle from './components/IcToggle';
import {connect} from 'react-redux';

function App() {
  return (
      <div>
        <h1>Tokunai pass tester</h1>
        <Rows/>
        <RowInput/>
        <IcToggle/>
        <TokunaiMeter/>
    </div>
  );
}

export default connect((state)=>{
    return {};
})(App);
