/**
 * Created by ruslan on 17.08.16.
 */
(function () {

    /************************ View ************************************/
    var HTML_Container_SelectMenu = React.createClass({

        render: function () {
            var props = this.props;
            var HTML_Li_SelectMenu = props.text.map(function (key, index) {
                return <li data-reactid={index}>
                    <div className='col-md-4 col-sm-4 col-xs-4 nameCity' data-reactid={index}>
                        <span onClick={props.onClickCity} data-reactid={index}>{key.name}</span>
                    </div>
                </li>

            });

            return (
                <div className='container' id='selectMenu' style={this.props.style}>
                    <div className='row'>
                        <div className='col-md-12 col-sm-12 col-xs-12' id='divUl'>

                            <ul className='list-group' id='cityList'>
                                {HTML_Li_SelectMenu}
                            </ul>

                        </div>
                        <div className='col-md-12 col-sm-12 col-xs-12'>
                            <button type='submit' onClick={this.props.onClickDone} className='btn btn-default'>Done
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    });
    /********************* View end ************************************/

    var SelectMenuApp = React.createClass({

        getInitialState: function () {

            return {
                data: '',
                pos: ''


            };
        },


        handleKeyDown: function (e) {


            var $listItems = $('.selected a');
            var $test = $('.autocomplete-suggestion');
            var key = e.keyCode,
                $selected = $listItems.filter('.select-ref'),
                $current;

            var $selected222 = $test.filter('.selected'),
                $current222;
            //if ( key != 40 && key != 38 ) return;

            if (key == 13) {
                e.preventDefault();
                console.log($('.selected').children());

            }
            if (key === 38 || key === 40) {
                $test.removeClass('selected');
            }
            console.log(25);
            $listItems.removeClass('select-ref');


            if (key == 37) //l
            {
                if (!$selected.length || $selected.is(':last-child')) {
                    $current222 = $listItems.eq(0);
                }
                else {
                    $current222 = $selected.next();
                }
            }
            else if (key == 39) //r
            {
                if (!$selected.length || $selected.is(':first-child')) {
                    $current222 = $listItems.last();
                }
                else {
                    $current222 = $selected.prev();
                }
            }
            else if (key == 40) {
                if (!$selected222.length || $selected222.is(':last-child')) {

                    $current = $test.eq(0);
                }
                else {
                    $current = $selected222.next();
                }

            }
            else if (key == 38) //  key
            {
                if (!$selected222.length || $selected222.is(':first-child')) {
                    $current = $test.last();
                }
                else {
                    $current = $selected222.prev();
                }
            }
            if (key === 38 || key === 40) {
                $current.addClass('selected');
                var $listItems2 = $('.selected a');
                $listItems2.eq(0).addClass('select-ref');
            }


            $current222.addClass('select-ref');


        },

        handleClickCity: function (element) {

        },
        click: function (e) {


        },


        render: function () {

            return (

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12 test"></div>

                        <div className="col-md-12 col-sm-12 col-xs-12" id="forPhone">
                            <form action="" className="inputForm">
                                <input type="text" className="form-control" placeholder="City"
                                       onClick={this.handleClickInput}
                                       onKeyDown={this.handleKeyDown}
                                       value={this.state.data}
                                />

                                <div className="testLi">
                                    <div className="autocomplete-suggestion" onClick={this.click}>city 1 <a
                                        href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 2 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 3 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 4 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 5 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion" id="sss">city 6 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 7 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 8 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion"> city 9 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                    <div className="autocomplete-suggestion">city 10 <a href="#">ref</a> in <a
                                        href="#">ref2</a></div>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12 test"></div>
                    </div>
                </div>

            );
        }

    });

    ReactDOM.render(<SelectMenuApp url="http://localhost:8000/json-router/cities/"/>,
        document.getElementById('selectMenuApp'));
})();


/************ Note **************/

/*
 <div className="autocomplete">

 <div className="a-list">str 1 <a href="" className="a-list-ref">ref</a> <a href="" className="a-list-ref">ref 2</a>
 </div>
 <div className="a-list">str 2 <a href="" className="a-list-ref">ref</a> <a href="" className="a-list-ref">ref 2</a>
 </div>
 <div className="a-list">str 3 <a href="" className="a-list-ref">ref</a> <a href="" className="a-list-ref">ref 2</a>
 </div>
 <div className="a-list">str 4 <a href="" className="a-list-ref">ref</a> <a href="" className="a-list-ref">ref 2</a>
 </div>
 <div className="a-list">str 5 <a href="" className="a-list-ref">ref</a> <a href="" className="a-list-ref">ref 2</a>
 </div>


 </div>
 */

/*

 active Up/Down = .select
 active left/right = .select-ref


 */






















