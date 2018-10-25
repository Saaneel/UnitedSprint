package Runner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/Resources/Feature/CompareTicket.feature", glue = {
		"Steps" }, format = { "pretty", "html:target/cucumber" }, tags="@Smoke, @Smoke2")

public class DefaultRunner extends AbstractTestNGCucumberTests  {

}
