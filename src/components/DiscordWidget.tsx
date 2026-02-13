const DiscordWidget = () => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <iframe
        src="https://discord.com/widget?id=1450896701106688165&theme=dark"
        width="100%"
        height="600"
        allowTransparency={true}
        frameBorder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="w-full"
        title="Discord Widget"
      />
    </div>
  );
};

export default DiscordWidget;
