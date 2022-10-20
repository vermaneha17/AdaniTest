const awards = [
    {
      name: 'James Peebles',
      category: 'Physics',
      research: 'Theoretical discoveries in physical cosmology',
      year: 2019,
    },
    {
      name: 'Michel Mayor',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'Didier Queloz',
      category: 'Physics',
      research: 'Discovery of an exoplanet orbiting a solar-type star',
      year: 2019,
    },
    {
      name: 'John B. Goodenough',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'M. Stanley Whittingham',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Akira Yoshino',
      category: 'Chemistry',
      research: 'Development of lithium-ion batteries',
      year: 2019,
    },
    {
      name: 'Arthur Ashkin',
      category: 'Physics',
      research: 'Optical tweezers and their application to biological systems',
      year: 2018,
    },
    {
      name: 'Gerard Mourou',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Donna Strickland',
      category: 'Physics',
      research: 'Method of generating high-intensity, ultra-short optical pulses',
      year: 2018,
    },
    {
      name: 'Frances H. Arnold',
      category: 'Chemistry',
      research: 'Directed evolution of enzymes',
      year: 2018,
    },
    {
      name: 'George P. Smith',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
    {
      name: 'Sir Gregory P. Winter',
      category: 'Chemistry',
      research: 'Phage display of peptides and antibodies.',
      year: 2018,
    },
  ];

  const prizes = [];
  let research = new Map();
  awards.forEach((award) => {
    let i=0;
    for(key in award) {
        //count unique research with name count
        if(key == 'research') {
            if(research.has( "award.research"))
                research.set({"award.research":research.get("award.research")+1});
        }
        if(award[key] == '2019'){
            if(award.category == 'Physics') {
                
                prizes[0] = {
                    category: 'Physics',
                    year: 2019,
                    winners: []
                }
                prizes[0].winners.push({name: award.name})
            } 
            if(award.category == 'Chemistry') {
                prizes[1] = {
                    category: 'Chemistry',
                    year: 2019,
                    winners: []
                }
                prizes[1].winners.push({name: award.name})
            }
        }
        if(award[key] == '2018'){
            if(award.category == 'Physics') {
                prizes[2] = {
                    category: 'Physics',
                    year: 2018,
                    winners: []
                }
                prizes[2].winners.push({name: award.name})
            } 
            if(award.category == 'Chemistry') {
                prizes[3] = {
                    category: 'Chemistry',
                    year: 2018,
                    winners: []
                }
                prizes[3].winners.push({name: award.name})
            }
        }
        
    }
 })

 console.log(prizes)