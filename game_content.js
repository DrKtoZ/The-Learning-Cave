// ══════════════════════════════════════════════════════════════════════
//  CAVE OF LEARNING — EDITABLE CONTENT FILE
//
//  Edit any text below and refresh your browser to see changes.
//  DO NOT rename this file or remove the "window.GAME_CONTENT = {"
//  line at the top or the "};" line at the very bottom.
//
//  STRUCTURE AT A GLANCE:
//    UI         → button labels, title screen text, intro story
//    ORIENTATIONS → the 5 philosophical classes (name, description, etc.)
//    ARTIFACTS  → items collected per orientation (emoji, name, flavor text)
//    ROOMS      → the 15 cave chambers (name, description, scenario, 5 choices)
//
//  Each ROOM choice must have:
//    orient: one of "Liberal" | "Behaviorist" | "Progressive" | "Humanistic" | "Radical"
//    text:   the choice text the player reads
// ══════════════════════════════════════════════════════════════════════

window.GAME_CONTENT = {

  // ─────────────────────────────────────────────
  //  UI STRINGS
  // ─────────────────────────────────────────────
  UI: {
    // Title screen
    titlePre:     "— ENTER THE —",
    titleMain:    "CAVE OF\nLEARNING",
    titleTagline: "A Philosophical Quest · PAEI © 1983/1994 · B.M. Zinn",
    menuStart:    "BEGIN QUEST",
    menuDesc:     "Navigate 15 mystical chambers.\nMake choices. Collect artifacts.\nDiscover your philosophical class.",
    menuCopyright:"Philosophy of Adult Education Inventory · Lifelong Learning Options",

    // Intro / story screen
    introTitle:   "⚔ THE LEGEND BEGINS ⚔",
    introBody:    "The Cave of Learning stretches deep into the mountain — a mystical labyrinth where every chamber holds a different test of wisdom.\n\nYou are an adventurer who has entered this cave to discover your true philosophical identity. In each of the 15 chambers ahead, you will face a choice. Your decisions will reveal whether you are...\n\n🧙 The Sage — keeper of ancient knowledge\n⚔️ The Knight — master of discipline\n🧭 The Ranger — solver of real problems\n🌿 The Druid — guide of inner growth\n🔥 The Revolutionary — agent of change\n\nChoose wisely. Each decision adds artifacts to your pack and shapes the hero you become.",
    introBtnLabel:"ENTER THE CAVE →",

    // In-game sidebar labels
    sideHero:        "YOUR HERO",
    sideCharDefault: "THE WANDERER",
    sideCharSub:     "Awaiting destiny...",
    sidePower:       "ORIENTATION POWER",
    sideArtifacts:   "ARTIFACTS COLLECTED",
    sideNoArtifacts: "None yet — enter the cave...",

    // Modal
    modalFoundLabel: "✦ {ORIENT} ARTIFACT FOUND ✦",  // {ORIENT} is replaced automatically
    modalArtifactType: "Relic of {CLASS}",            // {CLASS} is replaced automatically
    modalContinueLabel: "ENTER CHAMBER {NUM} →",      // {NUM} is replaced automatically
    modalFinalLabel:    "REVEAL MY CLASS →",

    // Challenge label shown above scenario
    challengeLabel: "⚔ THE CHALLENGE:",
    choicesLabel:   "CHOOSE YOUR PATH:",

    // Results screen
    resultsTag:      "YOUR PHILOSOPHICAL CLASS",
    resultsSectionPhilosophy: "▸ YOUR PHILOSOPHY",
    resultsSectionPower:      "▸ POWER LEVELS",
    resultsSectionArtifacts:  "▸ ARTIFACTS COLLECTED",
    resultsBtnReplay: "↩ PLAY AGAIN",
    resultsBtnTitle:  "⌂ TITLE SCREEN",
  },

  // ─────────────────────────────────────────────
  //  ORIENTATIONS (the 5 philosophical classes)
  // ─────────────────────────────────────────────
  ORIENTATIONS: {
    Liberal: {
      color:    "#5599ff",
      sprite:   "🧙",
      name:     "THE SAGE",
      subtitle: "Liberal · Keeper of Ancient Wisdom",
      desc:     "You are a Sage — keeper of the deep intellectual tradition. You believe that education's highest calling is to develop the mind and transmit the accumulated wisdom of civilization. In the Cave of Learning, you are drawn to scrolls, tomes, and the teachings of masters. You value organized knowledge, expert guidance, and the cultivation of genuine understanding above all else. Your approach: teach the great ideas, build a strong foundation, and let wisdom speak for itself."
    },
    Behaviorist: {
      color:    "#44ee88",
      sprite:   "⚔️",
      name:     "THE KNIGHT",
      subtitle: "Behaviorist · Master of Discipline",
      desc:     "You are a Knight — master of structure, discipline, and measurable mastery. You believe that learning is most powerful when it produces clear, demonstrable results. In the Cave, you move with purpose: clear objectives, efficient paths, and feedback at every turn. You design challenges systematically, measure performance precisely, and build competency through practice and reinforcement. Your creed: define the outcome, train toward it, and verify the result."
    },
    Progressive: {
      color:    "#ff9933",
      sprite:   "🧭",
      name:     "THE RANGER",
      subtitle: "Progressive · Solver of Real Problems",
      desc:     "You are a Ranger — explorer of the real world, solver of real problems. You believe that true learning happens when knowledge meets action. You navigate the Cave by tackling its actual challenges — not abstract puzzles, but the kinds of obstacles that appear in everyday life. You connect every lesson to a practical problem, every skill to a situation where it matters. Your philosophy: experience is the greatest teacher, and problems are the portals to growth."
    },
    Humanistic: {
      color:    "#cc55ff",
      sprite:   "🌿",
      name:     "THE DRUID",
      subtitle: "Humanistic · Guide of Inner Growth",
      desc:     "You are a Druid — gentle guide of the inner journey. You believe that each traveler carries their own path within them, and that true education is the art of helping it unfold. In the Cave, you create spaces of warmth and trust, follow the learner's own curiosity, and facilitate rather than direct. You honor feelings as wisdom, differences as gifts, and self-discovery as the highest form of learning. Your gift: you help others grow into who they already are."
    },
    Radical: {
      color:    "#ff3355",
      sprite:   "🔥",
      name:     "THE REVOLUTIONARY",
      subtitle: "Radical · Agent of Change",
      desc:     "You are a Revolutionary — bearer of the torch of critical consciousness. You believe that education is never neutral: it either reinforces the existing order or challenges it. In the Cave, you seek the hidden passages — the questions no one else dares to ask. You raise awareness of injustice, ignite dialogue, and empower travelers to become agents of transformation. Your mission: to illuminate what others keep in shadow, and forge a world more just than the one you entered."
    }
  },

  // ─────────────────────────────────────────────
  //  ARTIFACTS
  //  Each orientation has a pool of items.
  //  They are awarded in order (loops back if
  //  the player picks the same orientation many
  //  times). You can add or remove items freely.
  //
  //  Fields:
  //    emoji  — displayed large in the popup
  //    name   — artifact name
  //    flavor — short philosophical quote shown in popup
  // ─────────────────────────────────────────────
  ARTIFACTS: {
    Liberal: [
      { emoji: "📜", name: "Ancient Scroll",    flavor: "The texts of the ancients hold answers no living voice can give." },
      { emoji: "🎓", name: "Scholar's Cap",      flavor: "Wisdom is not given — it is earned through rigorous study." },
      { emoji: "📚", name: "Tome of Ages",       flavor: "Every great idea was once a whisper passed from one mind to another." },
      { emoji: "🔭", name: "Lens of Clarity",   flavor: "To understand the world, one must first understand its principles." },
      { emoji: "🪄", name: "Staff of Knowledge", flavor: "The greatest power is an educated mind that cannot be taken away." }
    ],
    Behaviorist: [
      { emoji: "🛡️", name: "Discipline Shield",    flavor: "Structure is not a cage — it is the scaffold upon which mastery is built." },
      { emoji: "🏹", name: "Precision Bow",          flavor: "Aim clearly. Practice faithfully. Measure honestly." },
      { emoji: "⚔️", name: "Knight's Blade",         flavor: "A skill earned through repetition never dulls." },
      { emoji: "📋", name: "Objective Codex",        flavor: "Know where you are going, or every road leads nowhere." },
      { emoji: "🔗", name: "Chain Mail of Rigor",    flavor: "Discipline links each lesson to the next, armor for the mind." }
    ],
    Progressive: [
      { emoji: "🧭", name: "Explorer's Compass",    flavor: "The map is not the territory — go and see for yourself." },
      { emoji: "🗺️", name: "Map of Challenges",     flavor: "Every real problem is a doorway to deeper knowledge." },
      { emoji: "👢", name: "Wanderer's Boots",       flavor: "The path teaches what no classroom can." },
      { emoji: "🔧", name: "Problem-Solver's Tool",  flavor: "Theory without application is a bridge to nowhere." },
      { emoji: "🌍", name: "Orb of Real World",      flavor: "Learning that cannot touch the ground cannot lift anyone up." }
    ],
    Humanistic: [
      { emoji: "💎", name: "Growth Crystal",    flavor: "Every learner carries a gem within them, waiting to be found." },
      { emoji: "🌿", name: "Nature's Cloak",    flavor: "Like a plant toward sunlight, the soul grows when given space." },
      { emoji: "🌸", name: "Bloom of Harmony",  flavor: "The greatest gift a teacher gives is trust in the learner." },
      { emoji: "🕊️", name: "Dove of Freedom",   flavor: "Learning flourishes where the spirit is free to explore." },
      { emoji: "✨", name: "Inner Light Stone",  flavor: "Wisdom is not filled in from outside — it is kindled from within." }
    ],
    Radical: [
      { emoji: "🔥", name: "Torch of Truth",        flavor: "Light reveals what power prefers kept in darkness." },
      { emoji: "🏴", name: "Banner of Change",       flavor: "Plant your flag where justice has not yet reached." },
      { emoji: "🗡️", name: "Blade of Questions",    flavor: "The sharpest weapon is a question that cannot be ignored." },
      { emoji: "📣", name: "Voice of the People",   flavor: "Education without social purpose serves only those who need it least." },
      { emoji: "⚡", name: "Lightning of Awakening", flavor: "True consciousness strikes like lightning — and changes everything it touches." }
    ]
  },

  // ─────────────────────────────────────────────
  //  ROOMS — the 15 cave chambers
  //
  //  Fields per room:
  //    name     — large heading (keep short, ~30 chars)
  //    subtitle — smaller line under the heading
  //    desc     — atmospheric flavor text (1–3 sentences)
  //    scenario — the actual question / challenge prompt
  //    choices  — exactly 5 choices, one per orientation
  //               orient must be one of the 5 keys above
  //               text is what the player reads and clicks
  // ─────────────────────────────────────────────
  ROOMS: [
    {
      name:     "The Hall of First Steps",
      subtitle: "Where every journey begins",
      desc:     "You stand at the cave entrance. Ancient runes flicker on the stone walls. The path forks deep within the darkness. Your expedition demands preparation — but what kind?",
      scenario: "Before venturing deeper, you must plan your approach. How do you begin your expedition?",
      choices: [
        { orient: "Radical",     text: "You speak with the cave's displaced inhabitants, mapping your route around the injustices they've suffered at the hands of its current rulers." },
        { orient: "Behaviorist", text: "You define your objectives precisely — what treasures you seek — and design the most efficient path to achieve each one." },
        { orient: "Liberal",     text: "You study the ancient scholarly maps and texts of the cave, organizing your knowledge before taking a single step." },
        { orient: "Progressive", text: "You assess the dangers ahead and craft an approach around solving each real obstacle as you encounter it." },
        { orient: "Humanistic",  text: "You ask your companions what calls to them, and let their curiosity guide the route." }
      ]
    },
    {
      name:     "The Scholar's Pool",
      subtitle: "Where wisdom takes root",
      desc:     "A still, glowing pool fills this chamber. Ancient knowledge shimmers beneath its surface, but each traveler sees something different. How does wisdom truly enter the mind?",
      scenario: "The pool's inscription asks: how do you best absorb ancient wisdom?",
      choices: [
        { orient: "Radical",     text: "By debating with fellow travelers, questioning which truths serve the powerful and which serve the people." },
        { orient: "Behaviorist", text: "By practicing the ritual spells repeatedly, receiving feedback after each attempt until you master them." },
        { orient: "Liberal",     text: "By listening to the Elder Sage who has mastered this pool for decades." },
        { orient: "Progressive", text: "By identifying a real problem the pool's magic could solve and learning only what you need to fix it." },
        { orient: "Humanistic",  text: "By exploring the pool freely, following your intuition without a prescribed path." }
      ]
    },
    {
      name:     "The Ancient Shrine",
      subtitle: "Where purpose is revealed",
      desc:     "A towering shrine dominates this chamber. Five stone tablets surround it, each carved with a different answer to the same question. The cave demands you choose only one.",
      scenario: "The shrine asks: what is the highest purpose of this Cave of Learning?",
      choices: [
        { orient: "Radical",     text: "To awaken travelers to the injustices of the world and give them power to change it." },
        { orient: "Behaviorist", text: "To develop skilled, competent adventurers capable of mastering specific tasks." },
        { orient: "Liberal",     text: "To cultivate deep wisdom, theoretical understanding, and intellectual growth." },
        { orient: "Progressive", text: "To empower travelers to solve real problems in their lives and communities." },
        { orient: "Humanistic",  text: "To help each traveler discover their truest self and grow as they wish." }
      ]
    },
    {
      name:     "The Memory Vault",
      subtitle: "Where your past speaks",
      desc:     "The walls of this vault are covered in inscriptions — each one the story of how a traveler once learned something that changed them forever. Your hand traces the one that feels most true.",
      scenario: "Which inscription best describes how you gained your greatest knowledge?",
      choices: [
        { orient: "Radical",     text: "Through critical reflection on the social and political forces that shaped your world." },
        { orient: "Behaviorist", text: "Through trial, feedback, and repetition until skills became second nature." },
        { orient: "Liberal",     text: "Through a rigorous, systematic education that built your understanding stone by stone." },
        { orient: "Progressive", text: "By pursuing your goals and solving problems that genuinely mattered to you." },
        { orient: "Humanistic",  text: "Through self-discovery — following your own path rather than someone else's curriculum." }
      ]
    },
    {
      name:     "The Crossroads Chamber",
      subtitle: "Where authority is questioned",
      desc:     "Five rival guides block your path, each arguing that THEY should decide the route. The chamber echoes with debate. You must side with one — for the sake of the travelers who follow.",
      scenario: "Who should ultimately decide what is learned in the Cave of Learning?",
      choices: [
        { orient: "Radical",     text: "Decisions must center on the key social and political realities that affect travelers' lives." },
        { orient: "Behaviorist", text: "The guide, who knows what skills travelers will need by journey's end." },
        { orient: "Liberal",     text: "The scholar, whose deep analysis of the subject reveals what's truly essential." },
        { orient: "Progressive", text: "The travelers, guided by their real needs, interests, and daily challenges." },
        { orient: "Humanistic",  text: "Mostly the traveler, in open conversation with a trusted facilitator." }
      ]
    },
    {
      name:     "The Preparation Hall",
      subtitle: "Where guides are forged",
      desc:     "This hall is where master guides train apprentices. You watch the veterans ready their companions for the journey ahead. One approach strikes you as the wisest.",
      scenario: "How do the most effective guides begin their preparation?",
      choices: [
        { orient: "Radical",     text: "By clarifying the social and political struggles that will shape the travelers' lives." },
        { orient: "Behaviorist", text: "By defining the specific outcomes they want and the most efficient path to produce them." },
        { orient: "Liberal",     text: "By laying out the key theories and concepts that form the foundation of understanding." },
        { orient: "Progressive", text: "By identifying the everyday problems the journey will help travelers solve." },
        { orient: "Humanistic",  text: "By asking travelers what they want to learn and how they want to learn it." }
      ]
    },
    {
      name:     "The Arena of Strengths",
      subtitle: "Where heroes discover their power",
      desc:     "The Arena shows each adventurer their true power — not in isolation, but in the specific situations where they come alive. The crowd falls silent as you enter the circle.",
      scenario: "In which situation are you most effective as a guide?",
      choices: [
        { orient: "Radical",     text: "Where travelers are aware of social injustice and ready to explore its causes together." },
        { orient: "Behaviorist", text: "Where learning is clearly structured, with defined objectives and built-in feedback." },
        { orient: "Liberal",     text: "Where the subject matter is clear, logically organized, and rich in depth." },
        { orient: "Progressive", text: "Where I can focus on practical skills that can be put to work solving real problems." },
        { orient: "Humanistic",  text: "Where the environment is unstructured and flexible enough to follow the traveler's interests." }
      ]
    },
    {
      name:     "The Forge",
      subtitle: "Where environments are crafted",
      desc:     "The Forge is where adventurers shape the very space in which learning occurs. The raw materials glow around you. What will you build? The answer says everything.",
      scenario: "What kind of learning environment do you create?",
      choices: [
        { orient: "Radical",     text: "A space for examining beliefs, values, and the critical questions that challenge the powerful." },
        { orient: "Behaviorist", text: "A controlled environment that moves travelers systematically toward clear objectives." },
        { orient: "Liberal",     text: "A well-organized framework presenting the content and concepts to be mastered." },
        { orient: "Progressive", text: "A replica of the real world — problems and all — that builds real problem-solving capacity." },
        { orient: "Humanistic",  text: "A warm, supportive climate where travelers feel safe to discover and express themselves." }
      ]
    },
    {
      name:     "The Mirror Grotto",
      subtitle: "Where feelings are faced",
      desc:     "The grotto's mirrors reflect not your appearance, but your emotions. Every feeling you've had in the Cave flickers before you. How do they fit into the journey of learning?",
      scenario: "How do you understand the role of learners' feelings in the learning process?",
      choices: [
        { orient: "Radical",     text: "They must be surfaced — they reveal what truly matters to the traveler about the world." },
        { orient: "Behaviorist", text: "They are tools the skillful guide uses strategically to achieve learning objectives." },
        { orient: "Liberal",     text: "They tend to distract from the real work of building deep knowledge and understanding." },
        { orient: "Progressive", text: "They provide energy that can be harnessed and focused toward solving real problems." },
        { orient: "Humanistic",  text: "They are inseparable from how travelers approach and truly own their learning." }
      ]
    },
    {
      name:     "The Armory",
      subtitle: "Where methods are chosen",
      desc:     "The Armory holds every teaching method ever devised: books and debates, drills and dialogues, challenges and conversations. Each adventurer leaves with the tools that suit them.",
      scenario: "Which teaching methods do you prefer to use?",
      choices: [
        { orient: "Radical",     text: "Dialogue and critical examination of controversial issues that affect the real world." },
        { orient: "Behaviorist", text: "Structured exercises with clear feedback that build competency step by step." },
        { orient: "Liberal",     text: "Methods shaped by the nature of the subject matter and its inherent logic." },
        { orient: "Progressive", text: "Problem-based challenges that present real-world dilemmas to be solved." },
        { orient: "Humanistic",  text: "Non-directive approaches that place the learner in charge of their own growth." }
      ]
    },
    {
      name:     "The Dragon's Riddle",
      subtitle: "Where disengagement is decoded",
      desc:     "A great dragon blocks your path. \"Solve my riddle,\" it says, \"or turn back.\" One of your companions has already given up. The dragon demands to know why.",
      scenario: "When a companion loses the will to learn, what is the most likely cause?",
      choices: [
        { orient: "Radical",     text: "They don't realize the stakes — the serious consequences of ignorance in an unjust world." },
        { orient: "Behaviorist", text: "They aren't getting enough structured practice and meaningful feedback." },
        { orient: "Liberal",     text: "The guide doesn't know the subject deeply enough to make it compelling." },
        { orient: "Progressive", text: "They don't see how it connects to problems in their everyday life." },
        { orient: "Humanistic",  text: "They simply aren't ready, or it isn't a priority for them right now — and that's okay." }
      ]
    },
    {
      name:     "The Fellowship Hall",
      subtitle: "Where differences are reckoned with",
      desc:     "The Fellowship Hall is filled with travelers from every background — different ages, cultures, histories, and abilities. How you view these differences will define your legacy.",
      scenario: "What do differences among adult learners mean to you?",
      choices: [
        { orient: "Radical",     text: "They arise from cultural and social conditions that must be honored, not erased or minimized." },
        { orient: "Behaviorist", text: "They won't interfere if each traveler gets adequate practice and structured reinforcement." },
        { orient: "Liberal",     text: "They matter less than building a shared foundation of knowledge and understanding." },
        { orient: "Progressive", text: "They come from different life experiences and lead to different applications of knowledge." },
        { orient: "Humanistic",  text: "They allow each traveler to learn in their own time and discover in their own way." }
      ]
    },
    {
      name:     "The Temple of Outcomes",
      subtitle: "Where success is measured",
      desc:     "The Temple is lined with measuring stones. Some glow brightly; others pulse slowly, their results only visible after many seasons. How do you know when the quest has succeeded?",
      scenario: "How should the outcomes of learning be evaluated?",
      choices: [
        { orient: "Radical",     text: "True impact is hard to measure — it may only reveal itself when the world has actually changed." },
        { orient: "Behaviorist", text: "Evaluation should be built into the journey, with continuous feedback for course correction." },
        { orient: "Liberal",     text: "It should show how much a traveler's conceptual understanding and theoretical grasp has grown." },
        { orient: "Progressive", text: "Proven when the traveler successfully resolves a real problem they encounter in life." },
        { orient: "Humanistic",  text: "Best done by travelers themselves — for their own purposes and personal growth." }
      ]
    },
    {
      name:     "The Throne Room",
      subtitle: "Where your role is defined",
      desc:     "You stand before the Throne of Guides. Every great teacher who ever walked this Cave sat here once and answered the same question. Now it is your turn.",
      scenario: "What is your primary role as a guide to other adventurers?",
      choices: [
        { orient: "Radical",     text: "To raise travelers' awareness of environmental and social injustice and empower them to act." },
        { orient: "Behaviorist", text: "To lead structured learning with clear feedback, guiding travelers toward proven mastery." },
        { orient: "Liberal",     text: "To systematically guide travelers in acquiring deep knowledge and understanding core theories." },
        { orient: "Progressive", text: "To help travelers identify their own challenges and equip them to solve real problems." },
        { orient: "Humanistic",  text: "To facilitate — not direct — learning, trusting travelers to find their own way." }
      ]
    },
    {
      name:     "The Final Gate",
      subtitle: "Where the journey is completed",
      desc:     "You have reached the Final Gate. Beyond it lies the exit — and your true philosophical identity. Before you pass through, the Gate asks one last question.",
      scenario: "When a traveler fails to learn what was taught, what does it mean?",
      choices: [
        { orient: "Radical",     text: "They haven't yet understood how learning could empower them to change the world." },
        { orient: "Behaviorist", text: "They need more practice and another opportunity to master the material — repeat the lesson." },
        { orient: "Liberal",     text: "The guide failed — true teaching always produces genuine learning." },
        { orient: "Progressive", text: "They haven't yet been able to apply the knowledge to real problems in daily life." },
        { orient: "Humanistic",  text: "They may have learned something else — something equally valuable and meaningful to them." }
      ]
    }
  ] // end ROOMS

}; // ← DO NOT REMOVE THIS LINE
