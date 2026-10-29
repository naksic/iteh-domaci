"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { mockDecks, mockSubjects } from "@/mock/data"
import { FullDeckDto } from "@/shared/types"

export default function DeckBrowser() {
    const [decks, setDecks] = useState<FullDeckDto[]>(mockDecks);
    const [search, setSearch] = useState<string>("");

    useEffect(() => {
        console.log(search)
        let data = mockDecks;

        if (search.trim()) {
            data = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()))
        }
        setDecks(data)
    }, [search])

    return (
        <div className="mx-auto max-w-7xl p-4">
            <div className="flex flex-col gap-8 md:flex-row">
                {/* <p>Obo je komponenta DeckBrowser</p> */}
                <aside>
                    <div className="flex flex-col gap-4">
                        <input
                            type="text" placeholder="Pretraga spilova"
                            className="rounded p-3 border border-gray-200"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)} />

                    </div>
                </aside>
                <section className="flex-1">
                    {/* sve kartice */}
                    {decks.length === 0 ? <p>Nema takvih spilova</p> :
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {/* Jedna kartica */}
                            {decks.map((deck, idx) => (
                                <div key={deck.id} className="rounded-lg border overflow-hidden">
                                    <Image src={"https://picsum.photos/400/300"} alt="Slika" width={400} height={300} className="w-full" />
                                    <div className="p-4">
                                        <h3>{deck.name}</h3>
                                        <p>{deck.subject.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </section>
            </div>
        </div>
    )
}