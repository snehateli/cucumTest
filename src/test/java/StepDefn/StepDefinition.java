package StepDefn;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {
	
	
	WebDriver driver;
	WebElement ele;
	
	@Given("^user is navigated to the gmail page$")
	public void user_is_navigated_to_the_gmail_page() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver", "src/test/resources/driver/chromedriver_win32_89/chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.facebook.com/");
		WebDriverWait wait = new WebDriverWait(driver, 70);
			wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@name=\"email\"]")));
		    
	}
	
	@When("^user enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_valid(String arg1,String arg2) throws Throwable {
	    driver.findElement(By.xpath("//*[@name=\"email\"]")).sendKeys(arg1);
	    driver.findElement(By.xpath("//*[@name=\"pass\"]")).sendKeys(arg2);
	    driver.findElement(By.name("login")).click();
	}

	@Then("^user is logged in successfully$")
	public void user_is_logged_in_successfully() throws Throwable {
	    System.out.println("logged in successfully");
	}
	
	@And("^user name is populated \"([^\"]*)\"$")
	public void user_name_is_populated(String arg1)throws Throwable
	{
		String str= driver.findElement(By.className("a8c37x1j ni8dbmo4 stjgntxs l9j0dhe7 ltmttdrg g0qnabr5")).getAttribute("value");
		Assert.assertEquals(arg1, str);
		System.out.println(str);
		
		
	}
}
