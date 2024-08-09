package org.example.noridayplanner;

import org.springframework.boot.SpringApplication;

public class TestNoriDayPlannerApplication {

	public static void main(String[] args) {
		SpringApplication.from(NoriDayPlannerApplication::main).with(TestcontainersConfiguration.class).run(args);
	}

}
