

const Contact = ({ setPage }) => {
    const contacts = [
        { name: 'Email', value: 'rasaaq@gmail.com', href: 'mailto:rasaaq@gmail.com', icon: <MailIcon /> },
        { name: 'LinkedIn', value: 'Connect on LinkedIn', href: '#', icon: <LinkedinIcon /> },
        { name: 'Instagram', value: 'Follow on Instagram', href: '#', icon: <InstagramIcon /> },
    ];
    return (
        <div className="w-screen h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-4 font-sans">
             <button onClick={() => setPage('home')} className="absolute top-8 left-8 text-orange-400 hover:text-orange-300 transition-colors">
                &larr; Back to Home
            </button>
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-2xl p-8">
                 <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>
                 <div className="space-y-6">
                     {contacts.map((contact, index) => (
                         <a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group">
                            <div className="text-orange-400 mr-4">{contact.icon}</div>
                            <div>
                                <p className="font-semibold text-lg">{contact.name}</p>
                                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">{contact.value}</p>
                            </div>
                         </a>
                     ))}
                 </div>
            </div>
        </div>
    );
};


export default Contact;