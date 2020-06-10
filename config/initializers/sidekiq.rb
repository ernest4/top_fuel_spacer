# frozen_string_literal: true

Sidekiq.configure_server do |config|
  # config.redis = { :url => 'redis://rediscloud:eb02n3r4zcdZ6HwklYLYT6r6wKkbnbsZ@redis-13025.c59.eu-west-1-2.ec2.cloud.redislabs.com:13025', namespace: "app3_sidekiq_#{Rails.env}" }
  # config.redis = { :url => 'redis://rediscloud:eb02n3r4zcdZ6HwklYLYT6r6wKkbnbsZ@redis-13025.c59.eu-west-1-2.ec2.cloud.redislabs.com:13025' }
  config.redis = { :url => ENV.fetch('REDISCLOUD_URL') { 'redis://localhost:6379/1' } }

  schedule_file = 'config/schedule.yml'
  Sidekiq::Cron::Job.load_from_hash YAML.load_file(schedule_file) if File.exist?(schedule_file)
end

Sidekiq.configure_client do |config|
  # config.redis = { :url => 'redis://rediscloud:eb02n3r4zcdZ6HwklYLYT6r6wKkbnbsZ@redis-13025.c59.eu-west-1-2.ec2.cloud.redislabs.com:13025', namespace: "app3_sidekiq_#{Rails.env}" }
  # config.redis = { :url => 'redis://rediscloud:eb02n3r4zcdZ6HwklYLYT6r6wKkbnbsZ@redis-13025.c59.eu-west-1-2.ec2.cloud.redislabs.com:13025' }
  config.redis = { :url => ENV.fetch('REDISCLOUD_URL') { 'redis://localhost:6379/1' } }
end
