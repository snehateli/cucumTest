package StepDefn;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/feature"
,glue={"StepDefn"},
plugin = { "pretty", "json:target/cucumber-reports/cucumber.json" },
dryRun= false)

public class TestRunner {
	
}
