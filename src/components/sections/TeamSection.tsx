import { ArrowUpRight, Share2 } from 'lucide-react'
import { siteContent } from '../../content/siteContent'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

function TeamSection() {
  const { team } = siteContent

  return (
    <section
      aria-labelledby="team-title"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-28"
      id="team"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            description={team.introduction || undefined}
            id="team-title"
            label={team.label}
            title={team.title}
          />
        </Reveal>
        {team.members.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.members.map((member) => {
              const hasPhoto = member.photo !== ''
              const hasLinkedIn = Boolean(member.linkedin.href)

              return (
                <Reveal className="h-full" key={member.name}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                    {hasPhoto ? (
                      <img
                        alt={member.name}
                        className="h-20 w-20 rounded-full object-cover"
                        height={80}
                        loading="lazy"
                        src={member.photo}
                        width={80}
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-night text-xl font-bold text-white"
                      >
                        {member.initials}
                      </div>
                    )}
                    <h3 className="mt-6 text-xl font-bold text-brand-night">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-blue">
                      {member.role}
                    </p>
                    {member.bio && (
                      <p className="mt-4 flex-1 leading-7 text-slate-600">
                        {member.bio}
                      </p>
                    )}
                    {hasLinkedIn ? (
                      <a
                        aria-label={`${member.linkedin.label} — ${member.name}`}
                        className="mt-6 inline-flex w-fit items-center gap-2 font-semibold text-brand-night underline decoration-slate-300 underline-offset-4 hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
                        href={member.linkedin.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Share2 aria-hidden="true" size={18} />
                        {member.linkedin.label}
                        <ArrowUpRight aria-hidden="true" size={16} />
                      </a>
                    ) : null}
                  </article>
                </Reveal>
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default TeamSection
