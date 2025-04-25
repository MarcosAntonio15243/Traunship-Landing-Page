

interface PeopleTeamCardProps {
  icon: string;
  description: string;
  name: string;
  profession: string;
}

export default function PeopleTeamCard({ icon, description, name, profession }: PeopleTeamCardProps) {
  return (
    <div className="flex flex-col items-center text-center gap-5 max-w-72">
      <img src={icon} alt={`${icon}`} className="w-28 h-28 object-cover rounded-full" />
      <p>{description}</p>
      <div>
        <p className="font-bold">{name}</p>
        <p className="text-sm">{profession}</p>
      </div>
    </div>
  )
}