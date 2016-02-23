import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['coverflow'],

  dataList: null,

  changedDataAction: null,

  selectCoverFlowCallback: Ember.computed(function() {
    return (event, cover, index) => {
      let dataList = this.get('dataList');
      let selectedData = dataList[index];
      console.log('coverflow change', selectedData);
      this.get('dataChangedAction')(selectedData);
    };
  }),

  selectedIndex: 0
});
