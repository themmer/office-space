import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['coverflow'],

  dataList: null,

  selectedData: null,

  dataChangedAction: null,

  selectCoverFlowCallback: Ember.computed(function() {
    return (event, cover, index) => {
      let dataList = this.get('dataList');
      let selectedData = dataList[index];
      console.log('coverflow change', selectedData);
      this.get('dataChangedAction')(selectedData);
    };
  }),

  selectedIndex: Ember.computed('dataList', 'selectedData', function() {
    let dataList = this.get('dataList');
    let selectedData = this.get('selectedData');

    if(selectedData) {
      let index = dataList.indexOf(selectedData);
      console.log('Returning index: ', index);
      return index;
    } else {
      console.log('Defaulting to first coverflow');
      return 0;
    }
  })
});
