Feature: Price check

@Smoke
Scenario: Check price at United Air
	Given User at United Air home page
	When User click on round trip botton
	And User click on the from location botton
	And User Type "1" "0" on location box
	And User click on the To Destination Text box
	And User Type "1" "1" on Destination box
	And User click on the Deperture Dates
	And User Type "01/16/2019" on Deperture Date
	And User click on the Return Dates
	And User Type "01/23/2019" on Return Date
	And User click on Travelers
	And User Select "3 adult" Travelers
	And User click on Find Flights
	And User get five price
	
	
	
#Scenario: Check price at American Air
#	Given User at American Air home page
#	When User click on AAround trip botton
#	And User Type "JFK" on AAlocation box
#	And User Type "BOS" on AADestination box
#	And User Select "3 adult" passengers
#	And User Type "01/16/2019" on AADeperture Date
#	And User Type "01/23/2019" on AAReturn Date
#	And User click on Find AAFlights
	

