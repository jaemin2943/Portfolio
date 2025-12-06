import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'neon-dash',
    title: 'Neon Dash',
    role: 'Gameplay Programmer',
    summary: 'A fast-paced rhythm platformer built in Unity featuring custom physics.',
    thumbnailPlaceholder: 'Neon Dash',
    imageUrl: '', // Upload image to public/images/neon-dash.jpg and set this path
    details: {
      engine: 'Unity (C#)',
      teamSize: '3 People',
      duration: '4 Months',
      overview: 'Neon Dash is a rhythm-based 2D platformer where the environment pulses to the beat of the music. The goal was to create a "flow state" experience for players. I was responsible for the core character controller, the audio-sync system, and the level editor tools.',
      contributions: [
        {
          category: 'Systems & Mechanics',
          items: [
            'Designed and implemented the "Dash" mechanic which makes the player invulnerable for 0.2s.',
            'Tuned jump gravity and air control values based on 20+ playtest sessions.'
          ]
        },
        {
          category: 'Technical Implementation',
          items: [
            'Wrote a custom kinematic character controller in C# to ensure precise collision detection.',
            'Developed an Audio Manager that uses FFT analysis to trigger environmental animations on beat.'
          ]
        },
        {
          category: 'Design Iteration',
          items: [
            'Simplified the level layout after playtesters reported visual clutter making navigation difficult.'
          ]
        }
      ],
      problemSolving: {
        problem: "Unity's default physics engine resulted in \"floaty\" movement and inconsistent wall-jumping, which ruined the rhythm aspect of the game.",
        solution: "I stripped out the Rigidbody physics and wrote a raycast-based controller. This resulted in pixel-perfect collision and snappy input response."
      },
      takeaways: [
        "Don't rely on default physics for precision platformers; custom controllers are worth the effort.",
        "Visual feedback (screenshake, particles) is just as important as the mechanic itself for game feel.",
        "Building tools for level designers early saves weeks of development time later."
      ],
      galleryPlaceholders: ['Gameplay Screenshot 1', 'Gameplay Screenshot 2', 'Code Snippet GIF'],
      galleryImages: [] // Add paths like '/images/neon-1.jpg', '/images/neon-2.gif'
    }
  },
  {
    id: 'project-aether',
    title: 'Project: Aether',
    role: 'Systems Designer',
    summary: 'Turn-based tactical RPG prototype focusing on elemental combat interactions.',
    thumbnailPlaceholder: 'Project Aether',
    imageUrl: '',
    details: {
        engine: 'Unreal Engine 5',
        teamSize: '5 People',
        duration: '6 Months',
        overview: 'A tactical RPG where players manipulate the battlefield elements to gain advantage. I designed the core elemental reaction system.',
        contributions: [
            {
                category: 'Systems Design',
                items: ['Designed 4 core elements (Fire, Water, Earth, Air) and their combinatorial effects.', 'Balanced damage formulas for 15+ different skills.']
            }
        ],
        takeaways: ['Complex systems need simple tutorials.', 'Iteration speed is key for balance.'],
        galleryPlaceholders: ['Combat UI', 'Skill Tree'],
        galleryImages: []
    }
  }
];

export const SKILLS = {
  design: ['Systems Design', 'Combat Mechanics', 'Economy Balancing', 'Level Design (Greyboxing)', 'Rapid Prototyping'],
  technical: ['C# / C++', 'Unity Engine', 'Unreal Engine 5 (Blueprints & C++)', 'HLSL / Shader Graph', 'Python'],
  tools: ['Git / GitHub / Perforce', 'Jira / Trello', 'Figma (UI/UX)', 'Blender (Basic Modeling)', 'Visual Studio']
};