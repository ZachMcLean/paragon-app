const EventItem = ({ info }) => {
	const { event } = info;
	return (
		<div className={event.color}>
			<p>{event.title}</p>
		</div>
	);
};

export default EventItem;
