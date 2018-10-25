package Steps;


import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import Utility.Library;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class USSteps extends Library {


	WebDriver driver;

	@Before
	public void initialize() {
		System.out.println("This is before class");

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Saaneel\\eclipse-workspace\\UnitedSpritFreamworks\\chromedriver.exe");

		// Webdriver is interface
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.united.com/en/us/");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^User at United Air home page$")
	public void UnitedMainPage() {
		System.out.println(driver.getTitle());
	}

	@When("^User click on round trip botton$")
	public void firststeps() throws Throwable {
		//	driver.findElement(By.xpath("html/body/div[1]/div/div[2]/main/section[1]/div/div[1]/div/div/div[2]/section[1]/div/div/div[2]/form/div[1]/fieldset/div/label[1]/span[2]"));

		driver.findElement(By.xpath(readproperties(driver, "Roundtrip"))).click();
	}

	@And("^User click on the from location botton$")
	public void secoundsteps() throws Throwable {
		//	driver.findElement(By.xpath("//input[@id='bookFlightOriginInput']")).click();
		driver.findElement(By.xpath(readproperties(driver, "secoundsteps"))).click();
	}

	@And("^User Type \"([^\"]*)\" \"([^\"]*)\" on location box$")
	public void thirdsteps(String rownum, String colnum) throws Throwable {

		//	driver.findElement(By.xpath("//input[@id='bookFlightOriginInput']")).sendKeys("JFK");
		//	driver.findElement(By.xpath(readproperties(driver, "thirdsteps"))).sendKeys("Jfk");

		driver.findElement(By.xpath(readproperties(driver,"thirdsteps"))).sendKeys(readexcel(driver, Integer.parseInt(rownum),Integer.parseInt(colnum)));
	}

	@And("^User click on the To Destination Text box$")
	public void forthsteps() throws Throwable {
		//		driver.findElement(By.xpath("//input[@id='bookFlightDestinationInput']")).click();
		driver.findElement(By.xpath(readproperties(driver, "forthsteps"))).click();
	}

	@And("^User Type \"([^\"]*)\" \"([^\"]*)\" on Destination box$")
	public void fifthsteps(String rownum, String colnum) throws Throwable {
		//		driver.findElement(By.xpath("//input[@id='bookFlightDestinationInput']")).sendKeys("BOS");
		//		driver.findElement(By.xpath(readproperties(driver, "fifthsteps"))).sendKeys("BOS");
		driver.findElement(By.xpath(readproperties(driver,"fifthsteps"))).sendKeys(readexcel(driver, Integer.parseInt(rownum),Integer.parseInt(colnum)));
	}

	@And("^User click on the Deperture Dates$")
	public void sixthsteps() throws Throwable {
		//		driver.findElement(By.xpath("//input[@aria-label='Departure']")).click();
		driver.findElement(By.xpath(readproperties(driver, "sixthsteps"))).click();
	}

	@And("^User Type \"([^\"]*)\" on Deperture Date$")
	public void seventhsteps(String ddate) throws Throwable {

		driver.findElement(By.xpath("//button[@aria-label='Move forward to switch to the next month']")).click();
		driver.findElement(By.xpath("//button[@aria-label='Move forward to switch to the next month']")).click();
		driver.findElement(By.xpath("//button[@aria-label='Move forward to switch to the next month']")).click();

		driver.findElement(By.xpath("//td[@aria-label='Wednesday, January 16, 2019']")).click();

		//		driver.findElement(By.xpath(readproperties(driver, "seventhsteps"))).click();
		//		driver.findElement(By.xpath(readproperties(driver, "seventhsteps"))).click();
		//		driver.findElement(By.xpath(readproperties(driver, "seventhsteps]"))).click();
		//		
		//		driver.findElement(By.xpath(readproperties(driver, "date"))).click();
		//		driver.findElement(By.xpath("//td[@aria-label='Wednesday, January 16, 2019']")).click();

	}

	@And("^User click on the Return Dates$")
	public void eighthsteps() throws Throwable {
		//		driver.findElement(By.xpath("//input[@id='ReturnDate']")).click();
		driver.findElement(By.xpath(readproperties(driver, "eighthsteps"))).click();
	}

	@And("^User Type \"([^\"]*)\" on Return Date$")
	public void ninthsteps(String rdate) throws Throwable {

		//	driver.findElement(By.xpath("//td[@aria-label='Wednesday, January 23, 2019']")).click();
		driver.findElement(By.xpath(readproperties(driver, "ninthsteps"))).click();
	}

	@And("^User click on Travelers$")
	public void tenthsteps() throws Throwable {
		//	driver.findElement(By.xpath("//input[@id='bookFlightModel.passengers']")).click();
		driver.findElement(By.xpath(readproperties(driver, "tenthsteps"))).click();

	}

	@And("^User Select \"([^\"]*)\" Travelers$")
	public void eleventhsteps(String traveler) throws Throwable {
		//		driver.findElement(By.xpath("//button[@id='NumOfAdults plusBtn']")).click();
		//		driver.findElement(By.xpath("//button[@id='NumOfAdults plusBtn']")).click();
		//		driver.findElement(By.xpath("//button[@id='passengersCloseBtn']")).click();

		driver.findElement(By.xpath(readproperties(driver, "traveler"))).click();
		driver.findElement(By.xpath(readproperties(driver, "traveler"))).click();
		driver.findElement(By.xpath(readproperties(driver, "boxclose"))).click();
	}

	@And("^User click on Find Flights$")
	public void twelvesteps() throws Throwable {
		//	driver.findElement(By.xpath("//button[contains(.,'Find flights')]")).click();
		driver.findElement(By.xpath(readproperties(driver, "FindFlight"))).click();
	}

	@And("^User get five price$")
	public void user_get_five_price() throws Throwable {

		System.out.println("Ticket Price");

		System.out.println(driver.findElement(By.xpath(readproperties(driver, "Uprice1"))).getText());
		System.out.println(driver.findElement(By.xpath(readproperties(driver, "Uprice2"))).getText());
		//System.out.println(driver.findElement(By.xpath(readproperties(driver, "Uprice3"))).getText());
		//System.out.println(driver.findElement(By.xpath(readproperties(driver, "Uprice4"))).getText());
		//System.out.println(driver.findElement(By.xpath(readproperties(driver, "Uprice5"))).getText());
	}

	//	
	@After
	public void teardowna() {
		driver.manage().deleteAllCookies();
	}

	/*

	public void initializeaa() {
		System.out.println("2nd test");
		driver.get("https://www.aa.com/homePage.do");
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@Given("^User at American Air home page$")
	public void AaMainPage() {
		driver.get("https://www.aa.com/homePage.do");
		System.out.println(driver.getTitle());
	}

	@When("^User click on AAround trip botton$")
	public void AAroundtrip() throws Throwable {
	//	driver.findElement(By.xpath("//span[contains(.,'Round trip')]")).click();
		driver.findElement(By.xpath(readproperties(driver, "AAroundtrip"))).click();
	}

	@And("^User Type \"([^\"]*)\" on AAlocation box$")
	public void user_Type_on_AAlocation_box(String arg1) throws Throwable {
//		Actions ac = new Actions (driver);
//		WebElement we = driver.findElement(By.xpath("//input[@value='YMQ']"));
//		ac.moveToElement(we).doubleClick().sendKeys("Jfk").build().perform();

		Actions ac = new Actions (driver);
		WebElement we = driver.findElement(By.xpath(readproperties(driver, "AAlocation_box_clear" )));
		ac.moveToElement(we).doubleClick().sendKeys("JFK").build().perform();
	}

	@And("^User Type \"([^\"]*)\" on AADestination box$")
	public void user_Type_on_AADestination_box(String arg1) throws Throwable {
//	   Actions ac= new Actions (driver);
//	   WebElement we = driver.findElement(By.xpath("//input[@id='reservationFlightSearchForm.destinationAirport']"));
//	   ac.moveToElement(we).doubleClick().sendKeys("BOS").build().perform();
//	   
	Actions aad = new Actions (driver);
	WebElement aawe = driver.findElement(By.xpath(readproperties(driver, "AADestination")));
	aad.moveToElement(aawe).doubleClick().sendKeys("BOS").build().perform();
	}

	@And("^User Select \"([^\"]*)\" passengers$")
	public void user_Select_passengers(String arg1) throws Throwable {
	//	driver.findElement(By.xpath("//select[@id='flightSearchForm.adultOrSeniorPassengerCount']")).sendKeys("3");
		driver.findElement(By.xpath(readproperties(driver, "Passengers"))).click();
	}

	@And("^User Type \"([^\"]*)\" on AADeperture Date$")
		public void AADDate(String AAddate) throws Throwable {
	//	driver.findElement(By.xpath("//input[@id='aa-leavingOn']")).clear();
	//	driver.findElement(By.xpath("//input[@id='aa-leavingOn']")).sendKeys("01/16/2019");

		driver.findElement(By.xpath(readproperties(driver, "AADeperture"))).clear();
		driver.findElement(By.xpath(readproperties(driver, "AADeperture"))).sendKeys("01/16/2019");
}

	@And("^User Type \"([^\"]*)\" on AAReturn Date$")
	public void AARDate(String AARdate) throws Throwable {

		driver.findElement(By.xpath(readproperties(driver, "AAReturn"))).clear();
		driver.findElement(By.xpath(readproperties(driver, "AAReturn"))).sendKeys("01/23/2019");

	//	driver.findElement(By.xpath("//input[@id='aa-returningFrom']")).clear();
	//	driver.findElement(By.xpath("//input[@id='aa-returningFrom']")).sendKeys("01/23/2019");

}
	// User click on Find Flights
	@And("^User click on Find AAFlights$")
	public void AASubmit() throws Throwable {
		driver.findElement(By.xpath("//input[@id='flightSearchForm.button.reSubmit']")).click();
		driver.findElement(By.xpath(readproperties(driver, "AAFlights"))).sendKeys("01/23/2019");
	}


	 */
	@After
	public void teardown() {
		System.out.println("testing is over!!!");
		driver.manage().deleteAllCookies();
		//	driver.close();
	}

}
