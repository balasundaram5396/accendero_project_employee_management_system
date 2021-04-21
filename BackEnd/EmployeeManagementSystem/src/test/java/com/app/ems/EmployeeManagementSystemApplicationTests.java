package com.app.ems;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
@AutoConfigureMockMvc
public class EmployeeManagementSystemApplicationTests {
    @Autowired
    private MockMvc mockMvc;

    @Before
    public void setup() {
    }

    @Test
    public void getEmployees() throws Exception {
        mockMvc.perform(get("/employees"))
                .andDo(print())
                .andExpect(
                        status().isOk());
    }

    @Test
    public void postEmployees() throws Exception {
    	String requestBody = "" +
                "{\n" +
                "      \"empId\": 1," +
                "      \"empName\": \"James\"," +
                "      \"empEmail\": \"Clerk@gmail.com\"," +
                "      \"empPhone\": 12345," +
                "      \"empDept\": \"CS\"," +
                "      \"empAge\": 123" +

                "}";
        mockMvc.perform(post("/employees")
        		.content(requestBody)
        	      .contentType(MediaType.APPLICATION_JSON)
        	      .accept(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(
                        status().isCreated());
    }
 
}

