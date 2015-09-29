describe 'Hotel Management' do
	if 'should add a new hotel and redirect the user to the hotel show page' do
		

		visit '/'
		click_link 'Add new hotel'
		fill_in 'Name', with: 'The Ice Hotel'
		fill_in 'City', with: 'Weston-super-Mare'
		fill_in 'Country', with: 'England'

		click_button 'Submit'

		within 'div#hotel-header' do
			expect(page).to have_content 'The Ice Hotel'
		end
	end
end