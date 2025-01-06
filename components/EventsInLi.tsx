
interface EventListProps {
    events: { name: string, href: string };
}

const EventList:React.FC<EventListProps> = ({events}) => {
    return ( <>
        <li className="text-sm cursor-pointer text-gray-600 font-light hover:text-black" href={events.href}>Bodas en 
        {events.name}</li>
    </> );
}
 
export default EventList;