type ContactItemProps = {
  label: string;
  value: string;
};

function ContactItem({ label, value }: ContactItemProps) {
  return (
    <div className="flex items-start gap-8">
      <span className="text-xs uppercase tracking-wider text-secondary w-20 mt-0.5">{label}</span>
      <span className="text-sm">{value}</span>
    </div>
  );
}

type ContactInfoProps = {
  contacts: { label: string; value: string }[];
};

export function ContactInfo({ contacts }: ContactInfoProps) {
  return (
    <div className="flex flex-col space-y-6">
      {contacts.map((contact, index) => (
        <ContactItem key={index} label={contact.label} value={contact.value} />
      ))}
    </div>
  );
}
