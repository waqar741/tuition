import React from 'react';
import { Hero, Toppers, About, ResourceHub } from '../components/HomeSections';

export default function Home() {
    return (
        <div>
            <Hero />
            <Toppers />
            <About />
            <ResourceHub />
        </div>
    );
}
