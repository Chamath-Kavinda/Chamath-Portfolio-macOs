import { WindowControls } from '#components';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';

function Contact() {
  return (
    <>
      <div id='window-header'>
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt='chamath' className='w-20 rounded-full' />

        <h3>Let's Connect</h3>
        <p>Got an Idea? A bug to squash? Or just wanna talk tech? i'm in.</p>

        <ul>
            {socials.map(({ id, text, icon, bg, link }) => (
                <li key={id} style={{ backgroundColor: bg}}>
                    <a href={link} target='_black' rel='noopemer noreferrer' title={text}>
                        <img src={icon} alt={text} className='size-5' />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
      </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow
