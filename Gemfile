source 'https://rubygems.org'

ruby '2.5.5'

gem 'rails', '7.0.8.1'
gem 'rake', '< 13.0'
gem 'bootsnap','>= 1.1.0', require: false

gem 'puma'
gem 'pg', '~> 0.20.0'
gem 'textacular', '~> 5.1.0'
gem 'it', '>= 2.0.0'
gem 'jquery-rails', '~> 4.2.0'
gem 'jquery-ui-rails', '~> 4.0.0'
gem 'clearance', '~> 1.14.0'
gem 'clearance-deprecated_password_strategies'
gem 'high_voltage', '~> 1'
gem 'paperclip', '~> 4.1.1'
gem 'fog-aws', '~> 3.0.0'
gem 'formtastic', '>= 2.2.1'
gem 'flutie'
gem 'bourbon', '~> 4.0.2'
gem 'simple_form', '~> 5.0', '>= 5.0.0'
gem 'nokogiri', '~> 1.15.6'
gem "will_paginate", "~> 3.1.7"
gem "friendly_id", "~> 5.2.4"
gem 'redcarpet'
gem 'honeypot-captcha'
gem 'sucker_punch', '~> 1.0'
gem 's3_file_field'
gem 'magnific-popup-rails'
gem 'rack-attack', '>= 4.4.0'
gem 'rack-cors', '>= 1.0.6'
gem 'rack-ssl-enforcer'
gem 'rollbar'
gem 'sassc-rails', '~> 2.1', '>= 2.1.2'
gem 'coffee-rails', '>= 5.0.0'
gem 'uglifier'
gem 'react-rails', '>= 2.6.2'
gem 'xmlrpc'
gem 'jbuilder'

group :development do
  gem "letter_opener"
  gem "listen"
  gem 'web-console', '>= 4.0.0'
end

group :development, :test do
  gem "rspec-rails", "~> 3.7.0"
  gem "byebug"
  gem "sham_rack", ">= 1.3.5"
  gem "pry"
  gem "pry-nav"
  gem "dotenv-rails"
end

group :test do
  gem "turnip"
  gem "capybara", "~> 3.0.0"
  gem "capybara-screenshot", "~> 1.0.23"
  gem "webdrivers", ">= 4.1.3"
  gem "database_cleaner"
  gem "factory_girl_rails", ">= 3.6.0"
  gem "faker"
  gem "bourne"
  gem "timecop"
  gem "rails-controller-testing", ">= 1.0.5"
  gem "selenium-webdriver"
  gem "shoulda-matchers"
  gem "launchy"
  gem "email_spec"
end

group :staging, :production do
  gem 'newrelic_rpm', '~> 3.18.1'
  gem 'sprockets-redirect', '>= 0.2.0'
  gem 'rails_12factor'
end
