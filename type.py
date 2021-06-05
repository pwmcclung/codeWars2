import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

chrome_driver_path = "C:\development\chromedriver.exe"

driver = webdriver.Chrome(executable_path=chrome_driver_path)
driver.get("https://typing-speed-test.aoeu.eu")

total_words = len(driver.find_elements_by_class_name("nextword"))

for word in range(total_words + 1):
    word = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "currentword")))

    input_area = driver.find_element_by_id("input")
    input_area.click()
    input_area.send_keys(word.text)
    input_area.send_keys(Keys.SPACE)