export class Constants {
  static readonly platformOptions = [
    "All Platform",
    "Google",
    "FB",
    "YouTube",
    "Instagram",
  ];

  static readonly statusOptions = [
    "All Status",
    "Live now",
    "Paused",
    "Exhausted",
  ];

  static readonly timeOptions = [
    "Last 30 days",
    "Last 60 days",
    "Last 90 days",
  ];

  static readonly campaignTypes = [
    {
      id: 1,
      campaign_name: "Get Leads as call",
      campaign_desc: "Reach broad audience and get leads through calls",
      icon: "/icons/new-campaign/call.svg",
      active_icon: "/icons/new-campaign/call-fill.svg",
      platform: "Google",
    },
    {
      id: 2,
      campaign_name: "Get Leads as Facebook messages",
      campaign_desc: "Get more FB messages from Leads",
      icon: "/icons/new-campaign/message.svg",
      active_icon: "/icons/new-campaign/message-fill.svg",
      platform: "FB",
    },
    {
      id: 3,
      campaign_name: "Increase Page followers",
      campaign_desc: "Encourage customers to follow your page",
      icon: "/icons/new-campaign/add.svg",
      active_icon: "/icons/new-campaign/add-fill.svg",
      platform: "FB",
    },
    {
      id: 4,
      campaign_name: "Get Customer Leads",
      campaign_desc: "Encourage customers to take action",
      icon: "/icons/new-campaign/person.svg",
      active_icon: "/icons/new-campaign/person-fill.svg",
      platform: "FB",
    },
    {
      id: 5,
      campaign_name: "Get More youtube views",
      campaign_desc: "Increase organic views by obtaining user attention",
      icon: "/icons/new-campaign/eye.svg",
      active_icon: "/icons/new-campaign/eye-fill.svg",
      platform: "Youtube",
    },
    {
      id: 6,
      campaign_name: "Get More website Traffic",
      campaign_desc: "Get the right people to visit your website",
      icon: "/icons/new-campaign/click.svg",
      active_icon: "/icons/new-campaign/click-fill.svg",
      platform: "Instagram",
    },
    {
      id: 7,
      campaign_name: "Increase Livestore Traffic",
      campaign_desc: "Drive visits to local stores, restaurants & Dealerships",
      icon: "/icons/new-campaign/store.svg",
      active_icon: "/icons/new-campaign/store-fill.svg",
      platform: "Google",
    },
    {
      id: 8,
      campaign_name: "Increase your app installs",
      campaign_desc: "Get more installs, interactions for your app",
      icon: "/icons/new-campaign/download.svg",
      active_icon: "/icons/new-campaign/download-fill.svg",
      platform: "Youtube",
    },
    {
      id: 9,
      campaign_name: "Increase the catalogue sales",
      campaign_desc: "Drive the sales of your catalogue and get more leads",
      icon: "/icons/new-campaign/clipboard.svg",
      active_icon: "/icons/new-campaign/clipboard-fill.svg",
      platform: "Google",
    },
  ];
}
