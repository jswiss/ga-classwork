require_relative '../lib/bank' #links to bank.rb file

describe Bank do 

  let(:bank) { Bank.new('Bank of Jeremy') }
  
  it 'should be able to create a new bank object' do
    expect(bank).to_not eq nil 
  end

  it 'should have a name attached' do
    expect(bank.name).to eq 'Bank of Jeremy'
  end

  it 'create a new account with a positive starting balance' do
    bank.create_account('Jeremy', 1)
    expect(bank.accounts['Jeremy']).to eq 1
  end

  it 'create a new account with a zero balance' do
    bank.create_account('Niall', 0)
    expect(bank.accounts['Niall']).to eq 0
  end

  it 'should be able to handle customer\'s deposits' do
    bank.create_account('Jeremy', 1)
    bank.deposit('Jeremy', 499)
    expect(bank.accounts['Jeremy']).to eq 500
  end

  it 'returns the balance of an account' do
    bank.create_account('Jeremy', 250)
    expect(bank.balance('Jeremy')).to eq 250
  end

  it 'allows a customer to withdraw their wonga' do
    bank.create_account('Jeremy', 500)
    bank.withdraw('Jeremy', 50)
    expect(bank.balance('Jeremy')).to eq 450
  end

end





