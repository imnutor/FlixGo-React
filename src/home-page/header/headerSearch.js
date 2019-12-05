import React, { Component } from "react";
import _ from "lodash";
import { Search, Grid} from "semantic-ui-react";

import { connect } from "react-redux";
import product from "../../product.json";
import * as action from "../../redux/action/indexAPI"
 
const initialState = { isLoading: false, results: [], value: '' }

for (var i = 0; i < product.length ; i++) {
  
  
  var source = _.times(10, () => ({
    title: product[getRandom(i)].nameTv,
    image: product[i].imgTv,
    price: product[i].price
  }))
}
function getRandom(max){
  return Math.floor(Math.random() * Math.floor(max) );
}
// const source = _.times(13, () => ({
//   title: product[getRandom(13)].nameTv
// }))


console.log(source);

 class HeaderSearch extends Component {
   
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }
  render() {
    const { isLoading, value, results } = this.state
    
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>
        </Grid>
        // <form action="#" className="header__search">
        //   <div className="container">
        //     <div className="row">
        //       <div className="col-12">
        //         <div className="header__search-content">
        //           <input
        //             type="text"
        //             placeholder="Search for a movie, TV Series that you are looking for"
        //           />
        //           <button type="button">search</button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </form>
    );
  }
}
let mapStateToProps = state => {
  return {
    
    itemTvSeries: state.movieReducer.listTvSeries,
    itemCartoon: state.movieReducer.listCartoon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListTvSeries: () => {
      dispatch(action.actGetListTvSeriesAPI());
    },
    getListCartoon: () => {
      dispatch(action.actGetListCartoonAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderSearch);