require 'uri'

def url_params(url)
  uri = URI url
  params = Rack::Utils.parse_query uri.query
end

Given(/^I am on "(.*?)"$/) do |url|
  puts visit url
end

When(/^I recieve a Google Analytics request$/) do
  traffic =  page.driver.network_traffic
  traffic.each do |traf|
    if traf.url.include? "__utm.gif"
      @params = url_params(traf.url)
    end
  end
  page.driver.clear_network_traffic
end

Then(/^I should( not)? see the following parameter value pair:$/) do |negate, table|
  data = table.hashes
  puts data
  data.each do |element|
    if negate
      @params[element['param']].should_not include(element['value']) 
    else
      @params[element['param']].should include(element['value'])
    end
  end
end

Then(/^parameter "(.*?)" exists$/) do |param|
  @params.should have_key(param)
end

Then(/^I click author "(.*?)"$/) do |author|
  page.should have_content author
  page.click_link(author)
end