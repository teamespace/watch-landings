import { motion } from 'framer-motion'

interface TeamShowcaseScrollProps {
  members: {
    name: string
    role: string
    bio: string
    imageUrl?: string
  }[]
  bgColor?: string
  textColor?: string
}

export function TeamShowcaseScroll({
  members,
  bgColor = '#FAF8F4',
  textColor = '#1C1C1A',
}: TeamShowcaseScrollProps) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: '80px 48px',
        display: 'flex',
        flexDirection: 'column',
        gap: 80,
      }}
    >
      {members.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ flex: 1, minWidth: 200 }}
          >
            {member.imageUrl ? (
              <img
                src={member.imageUrl}
                alt={member.name}
                style={{ width: '100%', maxWidth: 320, height: 'auto', borderRadius: 0 }}
              />
            ) : (
              <div
                style={{
                  width: 240,
                  height: 300,
                  backgroundColor: '#DDD',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: 14,
                }}
              >
                Photo
              </div>
            )}
          </motion.div>
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ flex: 2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 4px', color: textColor }}>
              {member.name}
            </h3>
            <p style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: 12 }}>
              {member.role}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: textColor, maxWidth: 480 }}>
              {member.bio}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
