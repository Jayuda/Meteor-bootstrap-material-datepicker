# Meteor package for T00rk/bootstrap-material-datepicker

Datetime picker for bootstrap-material-design. Datetimepicker modal dialog will appear when onFocus and OnClick

# Acknowledgments 

- TOOrk/bootstrap-material-datepicker(https://github.com/T00rk/bootstrap-material-datepicker)
- fezvrasta/bootstrap-material-design(http://fezvrasta.github.io/bootstrap-material-design/)


### Prerequisites

- underscore
- momentjs:moment
- jquery
- fezvrasta:bootstrap-material-design

# Documentation

- Datepicker API(https://github.com/T00rk/bootstrap-material-datepicker/blob/gh-pages/README.md)

# Basic Usage

    ## testDate.html
    <template name="testDate">
        <input name="dateOne" type="text" class="form-control">
    </template>

    ## testDate.js
    Template.testDate.rendered = function () {
        $('#dateOne').bootstrapMaterialDatePicker({ format:'DD/MM/YYYY', time:false });
    }

    Template.testDate.events({
        'focus #dateOne': function(e, template){
            var f = Template.instance().$('#dateOne');
            f.bootstrapMaterialDatePicker({format:'DD/MM/YYYY', time:false });
        }
    })



### Parameters

| Name				| Type							| Description									|
| ----------------- | ----------------------------- | --------------------------------------------- |
| **format**		| String						| MomentJS Format								|
| **shortTime**		| Boolean						| true => Display 12 hours AM|PM 				|
| **minDate**		| (String\|Date\|Moment)		| Minimum selectable date						|
| **maxDate**		| (String\|Date\|Moment)		| Maximum selectable date						|
| **currentDate**	| (String\|Date\|Moment)		| Initial Date									|
| **date**			| Boolean						| true => Has Datepicker						|
| **time**			| Boolean						| true => Has Timepicker						|
| **cancelText**	| String						| Text for the cancel button (default: Cancel)	|
| **okText**		| String						| Text for the OK button (default: OK)			|


### Events

| Name				| Parameters				| Description										|
| ----------------- | ------------------------- | ------------------------------------------------- |
| **beforeChange**	| event, date				| OK button is clicked								|
| **change**		| event, date				| OK button is clicked and input value is changed	|
| **dateSelected**	| event, date				| New date is selected								|


### Methods

        $('input').bootstrapMaterialDatePicker('setDate', moment());

| Name				| Parameter					| Description					|
| ----------------- | ------------------------- | ----------------------------- |
| **setDate**		| (String\|Date\|Moment)	| Set initial date				|
| **setMinDate**	| (String\|Date\|Moment)	| Set minimum selectable date	|
| **setMaxDate**	| (String\|Date\|Moment)	| Set maximum selectable date	|
| **destroy**		| NULL						| Destroy the datepicker		|

