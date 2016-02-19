import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['coverflow'],

  dataList: null,

  changedDataAction: null,

  selectCoverFlowCallback: Ember.computed(function() {
    return (event, cover, index) => {
      let dataList = this.get('dataList');
      let selectedData = dataList[index];
      this.set('selectedData', selectedData);
      console.log('we are seeing a change in coverflow', selectedData);
      this.get('dataChangedAction')(selectedData);
    };
  }),

  selectedData: null,

  selectedIndex: 1
});
