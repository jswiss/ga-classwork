var GABank = {};

GABank.AccountFactory = function(name, balance){
  this.name = name;
  this.balance = balance;
}

GABank.depositFunds = function(event) {
  var inputBox = $(this).closest('.account').find('input').first();
  var amount = parseFloat(inputBox.val());
  inputBox.val('');

  debugger;
};

GABank.currentAccount = new GABank.AccountFactory('currentAccount', 0);
GABank.savingsAccount = new GABank.AccountFactory('savingsAccount', 0);

//button test
$(document).ready(function(){
  console.log('dom ready');
  $('#deposit1').on('click', GABank.depositFunds);
});

