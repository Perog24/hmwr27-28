import { Fragment } from "react";
import { connect } from "react-redux";

import { multypltwoAction, dividetwoAction, setzeroAction } from "../store/actions/counter.actions";


const Counter = ({counter,  multypltwoAction, dividetwoAction, setzeroAction }) => {
   
   return (
      <Fragment>
         <h3>
            Count: {counter}
         </h3>
         <button onClick={multypltwoAction}>X*2</button>
         <button onClick={setzeroAction}>Reset</button>
         <button onClick={dividetwoAction}>X/2</button>
      </Fragment>
   )
}

const mapStateToProps = (state) =>({
   counter : state.counter.counter
});

const mapDispatchToProps = { multypltwoAction, dividetwoAction, setzeroAction  };

export default  connect(mapStateToProps, mapDispatchToProps )(Counter)
