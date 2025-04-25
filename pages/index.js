import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [showCourses, setShowCourses] = useState(false);

  const coaches = [
    {
      name: 'Dr. Luna',
      specialty: 'Mindfulness & Deep Focus',
      bio: 'Expertin für achtsames Coaching und mentale Stärke.',
      courses: ['Achtsamkeit im Alltag', 'Deep Work Mastery']
    },
    {
      name: 'Coach Orion',
      specialty: 'Leadership & Vision',
      bio: 'Hilft Führungskräften, visionär und klar zu handeln.',
      courses: ['Visionäres Leadership', 'Entscheidungsstärke entwickeln']
    },
    {
      name: 'Mira Nova',
      specialty: 'Business & KI Integration',
      bio: 'Verbindet technologische Innovation mit unternehmerischem Denken.',
      courses: ['Business Automation mit KI', 'Digital Strategy Masterclass']
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      {!loggedIn ? (
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Willkommen bei AITHRA</h1>
          <p className="mb-6">The new era of coaching</p>
          <Input
            placeholder="Dein Name"
            className="mb-4"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button onClick={() => setLoggedIn(true)} className="w-full">
            Starte die Demo
          </Button>
        </div>
      ) : selectedCoach ? (
        <div className="max-w-2xl mx-auto">
          <Button onClick={() => { setSelectedCoach(null); setShowCourses(false); }} className="mb-4">
            ← Zurück
          </Button>
          <h2 className="text-2xl font-bold mb-2">{selectedCoach.name}</h2>
          <p className="text-sm text-gray-400 mb-4">{selectedCoach.specialty}</p>
          <p className="mb-6">{selectedCoach.bio}</p>
          {!showCourses ? (
            <>
              <Button className="mb-4">Live-Session starten</Button>
              <Button onClick={() => setShowCourses(true)}>Kursübersicht ansehen</Button>
            </>
          ) : (
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Kurse von {selectedCoach.name}</h3>
              <ul className="list-disc list-inside">
                {selectedCoach.courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Hallo {username || 'Gast'}, willkommen zurück!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Deine Kurse</h2>
                <p>• Mastering Mindset<br/>• Business Coaching Basics</p>
                <Button className="mt-4">Kurs fortsetzen</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Empfohlen für dich</h2>
                <p>• Neuro Leadership<br/>• KI im Alltag nutzen</p>
                <Button className="mt-4">Mehr entdecken</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Unsere Coaches</h2>
                <ul>
                  {coaches.map((coach) => (
                    <li key={coach.name} className="mb-2">
                      <span className="block font-semibold">{coach.name}</span>
                      <span className="text-sm text-gray-400">{coach.specialty}</span>
                      <Button className="mt-1" onClick={() => setSelectedCoach(coach)}>
                        Profil ansehen
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">Live mit Coach interagieren</h2>
                <p>Starte eine Live-Session mit einem unserer Coaches.</p>
                <a href="https://meet.jit.si/AITHRA-DEMO" target="_blank">
                  <Button className="mt-4">Live-Session starten</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}