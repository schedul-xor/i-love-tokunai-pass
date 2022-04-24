import TokunaiMeter from './components/TokunaiMeter';
import RowInput from './components/RowInput';
import Rows from './components/Rows';
import {connect} from 'react-redux';

function App() {
  return (
      <div>
        <h1>Tokunai pass tester</h1>
        <Rows/>
        <RowInput/>
        <TokunaiMeter/>
    </div>
  );
}

export default connect((state)=>{
    return {};
})(App);
