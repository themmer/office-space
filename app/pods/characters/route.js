import Ember from 'ember';

//var Character = Ember.Object.extend({
//  name: '',
//  realName: '',
//  quotes: []
//});
//
//var Quote = Ember.Object.extend({
//  quote: '',
//});

var Character = Ember.Object.extend({
  name: '',
  realName: '',
  //quotes: ['1', '2', '3'],
  slug: Ember.computed('name', function() {
    console.log('Recomputing slug');
    return this.get('name').dasherize();
  })
});

// Mock data that would normally be loaded via mock or rest service
var characters =
  Ember.A([
    Character.create({
      name: 'Bill Lumbergh',
      realName: 'Gary Cole'
    }),
    Character.create({
      name: 'Bob Porter',
      realName: '	Paul Willson',
    }),
    Character.create({
      name: 'Bob Slydell',
      realName: 'John C. McGinley'
    }),
    Character.create({
      name: 'Drew',
      realName: 'Greg Pitts'
    }),
    Character.create({
      name: 'Joanna',
      realName: 'Jennifer Aniston'
    }),
    Character.create({
      name: 'Lawrence',
      realName: 'Diedrich Bader'
    }),
    Character.create({
      name: 'Michael Bolton',
      realName: 'David Herman'
    }),
    Character.create({
      name: 'Milton Waddams',
      realName: 'Stephen Root'
    }),
    Character.create({
      name: 'Nina',
      realName: 'Kinna McInroe'
    }),
    Character.create({
      name: 'Peter Gibbons',
      realName: 'Ron Livingston'
    }),
    Character.create({
      name: 'Samir', // Nagheenanajar
      realName: 'Ajay Naidu'
    }),
    Character.create({
      name: 'Tom Smykowski',
      realName: 'Richard Riehle'
    })]);

var quotes = "Samir: No one in this country can ever pronounce my name right. It's not that hard: Na-ghee-na-na-jar. Nagheenanajar.\nMichael Bolton: Yeah, well, at least your name isn't Michael Bolton.\nSamir: You know, there's nothing wrong with that name.\nMichael Bolton: There *was* nothing wrong with it... until I was about twelve years old and that no-talent ass clown became famous and started winning Grammys.\nSamir: Hmm... well, why don't you just go by Mike instead of Michael?\nMichael Bolton: No way! Why should I change? He's the one who sucks.\n\nPeter Gibbons: The thing is, Bob, it's not that I'm lazy, it's that I just don't care.\nBob Porter: Don't... don't care?\nPeter Gibbons: It's a problem of motivation, all right? Now if I work my ass off and Initech ships a few extra units, I don't see another dime, so where's the motivation? And here's something else, Bob: I have eight different bosses right now.\nBob Slydell: I beg your pardon?\nPeter Gibbons: Eight bosses.\nBob Slydell: Eight?\nPeter Gibbons: Eight, Bob. So that means that when I make a mistake, I have eight different people coming by to tell me about it. That's my only real motivation is not to be hassled, that and the fear of losing my job. But you know, Bob, that will only make someone work just hard enough not to get fired.\n\nPeter Gibbons: What would you do if you had a million dollars?\nLawrence: I'll tell you what I'd do, man: two chicks at the same time, man.\nPeter Gibbons: That's it? If you had a million dollars, you'd do two chicks at the same time?\nLawrence: Damn straight. I always wanted to do that, man. And I think if I were a millionaire I could hook that up, too; 'cause chicks dig dudes with money.\nPeter Gibbons: Well, not all chicks.\nLawrence: Well, the type of chicks that'd double up on a dude like me do.\nPeter Gibbons: Good point.\nLawrence: Well, what about you now? What would you do?\nPeter Gibbons: Besides two chicks at the same time?\nLawrence: Well, yeah.\nPeter Gibbons: Nothing.\nLawrence: Nothing, huh?\nPeter Gibbons: I would relax... I would sit on my ass all day... I would do nothing.\nLawrence: Well, you don't need a million dollars to do nothing, man. Take a look at my cousin: he's broke, don't do shit.\n\nMichael Bolton: PC load letter! What the fuck does that mean?\n\nSamir: No one in this country can ever pronounce my name right. It's not that hard: Na-ghee-na-na-jar. Nagheenanajar.\nMichael Bolton: Yeah, well, at least your name isn't Michael Bolton.\nSamir: You know, there's nothing wrong with that name.\nMichael Bolton: There *was* nothing wrong with it... until I was about twelve years old and that no-talent ass clown became famous and started winning Grammys.\nSamir: Hmm... well, why don't you just go by Mike instead of Michael?\nMichael Bolton: No way! Why should I change? He's the one who sucks.\n\nPeter Gibbons: So I was sitting in my cubicle today, and I realized, ever since I started working, every single day of my life has been worse than the day before it. So that means that every single day that you see me, that's on the worst day of my life.\nDr. Swanson: What about today? Is today the worst day of your life?\nPeter Gibbons: Yeah.\nDr. Swanson: Wow, that's messed up.\n\nBob Porter: Looks like you've been missing a lot of work lately.\nPeter Gibbons: I wouldn't say I've been *missing* it, Bob.\n\nMilton Waddams: [talking on the phone] And I said, I don't care if they lay me off either, because I told, I told Bill that if they move my desk one more time, then, then I'm, I'm quitting, I'm going to quit. And, and I told Don too, because they've moved my desk four times already this year, and I used to be over by the window, and I could see the squirrels, and they were merry, but then, they switched from the Swingline to the Boston stapler, but I kept my Swingline stapler because it didn't bind up as much, and I kept the staples for the Swingline stapler and it's not okay because if they take my stapler then I'll set the building on fire...\n\nTom Smykowski: It was a \"Jump to Conclusions\" mat. You see, it would be this mat that you would put on the floor... and would have different CONCLUSIONS written on it that you could JUMP TO.\nMichael Bolton: That's the worst idea I've ever heard in my life, Tom.\nSamir: Yes, this is horrible, this idea.\n\nPeter Gibbons: Let me ask you something. When you come in on Monday and you're not feeling real well, does anyone ever say to you, \"Sounds like someone has a case of the Mondays?\"\nLawrence: No. No, man. Shit, no, man. I believe you'd get your ass kicked sayin' something like that, man.\n\nBob Porter: We're gonna be getting rid of these people here... First, Mr. Samir Naga... Naga... Naga... Not gonna work here anymore, anyway.\n\nMilton Waddams: The ratio of people to cake is too big.\n\nBill Lumbergh: Milt, we're gonna need to go ahead and move you downstairs into storage B. We have some new people coming in, and we need all the space we can get. So if you could just go ahead and pack up your stuff and move it down there, that would be terrific, OK?\nMilton Waddams: Excuse me, I believe you have my stapler...\n\nJoanna: So, where do you work, Peter?\nPeter Gibbons: Initech.\nJoanna: In... yeah, what do you do there?\nPeter Gibbons: I sit in a cubicle and I update bank software for the 2000 switch.\nJoanna: What's that?\nPeter Gibbons: Well see, they wrote all this bank software, and, uh, to save space, they used two digits for the date instead of four. So, like, 98 instead of 1998? Uh, so I go through these thousands of lines of code and, uh... it doesn't really matter. I uh, I don't like my job, and, uh, I don't think I'm gonna go anymore.\nJoanna: You're just not gonna go?\nPeter Gibbons: Yeah.\nJoanna: Won't you get fired?\nPeter Gibbons: I don't know, but I really don't like it, and, uh, I'm not gonna go.\nJoanna: So you're gonna quit?\nPeter Gibbons: Nuh-uh. Not really. Uh... I'm just gonna stop going.\nJoanna: When did you decide all that?\nPeter Gibbons: About an hour ago.\nJoanna: Oh, really? About an hour ago... so you're gonna get another job?\nPeter Gibbons: I don't think I'd like another job.\nJoanna: Well, what are you going to do about money and bills and...\nPeter Gibbons: You know, I've never really liked paying bills. I don't think I'm gonna do that, either.\nJoanna: Well, so what do you wanna do?\nPeter Gibbons: I wanna take you out to dinner, and then I wanna go back to my apartment and watch 'Kung Fu'. Do you ever watch 'Kung Fu'?\nJoanna: I love 'Kung Fu'.\nPeter Gibbons: Channel 39.\nJoanna: Totally.\nPeter Gibbons: You should come over and watch 'Kung Fu' tonight.\nJoanna: Ok.\n[Peter nods]\nJoanna: Ok. Can we order lunch first?\n[Peter nods again]\nJoanna: Ok.\n\nTom Smykowski: Well-well look. I already told you: I deal with the god damn customers so the engineers don't have to. I have people skills; I am good at dealing with people. Can't you understand that? What the hell is wrong with you people?\n\nDom Portwood: Hi, Peter. What's happening? We need to talk about your TPS reports.\nPeter Gibbons: Yeah. The coversheet. I know, I know. Uh, Bill talked to me about it.\nDom Portwood: Yeah. Did you get that memo?\nPeter Gibbons: Yeah. I got the memo. And I understand the policy. And the problem is just that I forgot the one time. And I've already taken care of it so it's not even really a problem anymore.\nDom Portwood: Ah! Yeah. It's just we're putting new coversheets on all the TPS reports before they go out now. So if you could go ahead and try to remember to do that from now on, that'd be great. All right!\n\nJoanna: You know what, Stan, if you want me to wear 37 pieces of flair, like your pretty boy over there, Brian, why don't you just make the minimum 37 pieces of flair?\nStan, Chotchkie's Manager: Well, I thought I remembered you saying that you wanted to express yourself.\nJoanna: Yeah. You know what, yeah, I do. I do want to express myself, okay. And I don't need 37 pieces of flair to do it.\n[flips off Stan]\n\nPeter Gibbons: It's not just about me and my dream of doing nothing. It's about all of us. I don't know what happened to me at that hypnotherapist and, I don't know, maybe it was just shock and it's wearing off now, but when I saw that fat man keel over and die - Michael, we don't have a lot of time on this earth! We weren't meant to spend it this way. Human beings were not meant to sit in little cubicles staring at computer screens all day, filling out useless forms and listening to eight different bosses drone on about about mission statements.\nMichael Bolton: I told those fudge-packers I liked Michael Bolton's music.\nPeter Gibbons: Oh. That is not right, Michael.\n\nBob Slydell: You see, what we're actually trying to do here is, we're trying to get a feel for how people spend their day at work... so, if you would, would you walk us through a typical day, for you?\nPeter Gibbons: Yeah.\nBob Slydell: Great.\nPeter Gibbons: Well, I generally come in at least fifteen minutes late, ah, I use the side door - that way Lumbergh can't see me, heh heh - and, uh, after that I just sorta space out for about an hour.\nBob Porter: Da-uh? Space out?\nPeter Gibbons: Yeah, I just stare at my desk; but it looks like I'm working. I do that for probably another hour after lunch, too. I'd say in a given week I probably only do about fifteen minutes of real, actual, work.\n\nPeter Gibbons: You're gonna lay off Samir and Michael?\nBob Slydell: Oh yeah, we're gonna bring in some entry-level graduates, farm some work out to Singapore, that's the usual deal.\nBob Porter: Standard operating procedure.\nPeter Gibbons: Do they know this yet?\nBob Slydell: No. No, of course not. We find it's always better to fire people on a Friday. Studies have statistically shown that there's less chance of an incident if you do it at the end of the week.\n\nMilton Waddams: Excuse me? Excuse me, senor? May I speak to you please? I asked for a mai tai, and they brought me a pina colada, and I said no salt, NO salt for the margarita, but it had salt on it, big grains of salt, floating in the glass...\nMexican Waiter: Lo siento mucho, senor.\n[Under his breath]\nMexican Waiter: Pinche gringo.\nMilton Waddams: [as the waiter walks away] And yes, I won't be leaving a tip, 'cause I could... I could shut this whole resort down. Sir? I'll take my traveler's checks to a competing resort. I could write a letter to your board of tourism and I could have this place condemned. I could put... I could put... strychnine in the guacamole. There was salt on the glass, BIG grains of salt.\n\nMichael Bolton: Peter, you're in deep shit. You were supposed to come in on Saturday. What were you doing?\nPeter Gibbons: Michael, I did nothing. I did absolutely nothing, and it was everything that I thought it could be.\n\n[Peter and Lawrence are working on the crew cleaning up the burned Initech building]\nPeter Gibbons: This isn't so bad, huh? Makin' bucks, gettin' exercise, workin' outside.\nLawrence: Fuckin' A.\nPeter Gibbons: [nods] Fuckin' A.\n\nBill Lumbergh: Hello Peter, whats happening? Ummm, I'm gonna need you to go ahead come in tomorrow. So if you could be here around 9 that would be great, mmmk... oh oh! and I almost forgot ahh, I'm also gonna need you to go ahead and come in on Sunday too, kay. We ahh lost some people this week and ah, we sorta need to play catch up.\n\nPeter Gibbons: [about the plan to steal from Initech] Before we go any further, all right, we have to swear to God, Allah, that nobody knows about this but us, all right? No family members, no girlfriends, nobody.\nSamir: Of course.\nMichael Bolton: Agreed,\nLawrence: [from the next apartment through the wall] Don't worry, man. I won't tell anyone either.\nMichael Bolton: Who the fuck is that?\nPeter Gibbons: Uh, don't worry about him. He's cool.\n\n[repeated line]\nNina: Corporate accounts payable, Nina speaking. *JUST* a moment.\n\nPeter Gibbons: Um, the 7-Eleven, right? You take a penny from the tray.\nJoanna: From the crippled children?\nPeter Gibbons: No, that's the jar. I'm talking about the tray, the pennies for everybody.\n\nBob Slydell: I'll be honest with you, I love his music. I do. I'm a Michael Bolton fan. For my money, I don't know if it gets any better than when he sings \"When a Man Loves a Woman\".\n\nNina: Now Milton, don't be greedy, let's pass it along and make sure everyone gets a piece.\nMilton Waddams: Yeah, but last time I didn't receive a piece. And I was told...\nNina: Just pass.\n[while the cake passes Milton mutters - eventually everybody but Milton gets a piece]\nMilton Waddams: [muttering] I could set the building on fire.\n\nPeter Gibbons: I can't believe what a bunch of nerds we are. We're looking up \"money laundering\" in a dictionary.\n\nPeter Gibbons: Hey, guys.\nMichael Bolton: What's up, G?\nPeter Gibbons: Want to go to Chotchkie's? Get some coffee?\nSamir: Oh, it's a little early.\nPeter Gibbons: I gotta get outta here. I think I'm gonna lose it.\nFemale Temp: Uh-oh. Sounds like somebody's got a case of the Mondays.\n\nBob Slydell: I'd like to move us right along to a Peter Gibbons. Now we had a chance to meet this young man, and boy that's just a straight shooter with upper management written all over him.\n\nPeter Gibbons: Lawrence, you awake?\nLawrence: Yeah.\nPeter Gibbons: You wanna come over?\nLawrence: No, thanks, man. I don't want you fucking up my life, too.\n\n[Stuck in traffic]\nSamir: Mother... shitter... Son of an... ass. I just...\n[punches steering wheel]\n\nMichael Bolton: Samir and I are the best programmers they got at that place. You haven't been showing up and you get to keep your job.\nPeter Gibbons: Actually, I'm being promoted.\n\nTom Smykowski: [Smykowski is in a full-body cast] Just remember, if you hang in there long enough, good things can happen in this world. I mean, look at me.\n\nStan, Chotchkie's Manager: We need to talk about your flair.\nJoanna: Really? I... I have fifteen pieces on. I, also...\nStan, Chotchkie's Manager: Well, okay. Fifteen is the minimum, okay?\nJoanna: Okay.\nStan, Chotchkie's Manager: Now, you know it's up to you whether or not you want to just do the bare minimum. Or... well, like Brian, for example, has thirty seven pieces of flair, okay. And a terrific smile.\nJoanna: Okay. So you... you want me to wear more?\nStan, Chotchkie's Manager: Look. Joanna.\nJoanna: Yeah.\nStan, Chotchkie's Manager: People can get a cheeseburger anywhere, okay? They come to Chotchkie's for the atmosphere and the attitude. Okay? That's what the flair's about. It's about fun.\nJoanna: Yeah. Okay. So more then, yeah?\nStan, Chotchkie's Manager: Look, we want you to express yourself, okay? Now if you feel that the bare minimum is enough, then okay. But some people choose to wear more and we encourage that, okay? You do want to express yourself, don't you?\nJoanna: Yeah, yeah.\nStan, Chotchkie's Manager: Okay. Great. Great. That's all I ask.\n\nSteve: Good evening Sir, my name is Steve. I come from a rough area. I used to be addicted to crack but now I am off it and trying to stay clean. That is why I am selling magazine subscriptions.\n\nBill Lumbergh: [in Peter's dream, Lumbergh is oiled up and having sex] You can just go ahead and move a little bit to the left. Yeah, that's it. Great.\n\nBob Slydell: Would you bear with me for just a second, please?\nPeter Gibbons: OK.\nBob Slydell: What if - and believe me this is a hypothetical - but what if you were offered some kind of a stock option equity sharing program. Would that do anything for you?\nPeter Gibbons: I don't know, I guess. Listen, I'm gonna go. It's been really nice talking to both of you guys.\nBob Slydell: Absolutely, the pleasure's all on this side of the table, trust me.\nPeter Gibbons: Good luck with your layoffs, all right? I hope your firings go really well.\nBob Porter: Excellent.\nBob Slydell: Great... Wow.\n\nBill Lumbergh: Oh, and remember: next Friday... is Hawaiian shirt day. So, you know, if you want to, go ahead and wear a Hawaiian shirt and jeans.\n\nMilton Waddams: I was told that I could listen to the radio at a reasonable volume from nine to eleven, I told Bill that if Sandra is going to listen to her headphones while she's filing then I should be able to listen to the radio while I'm collating so I don't see why I should have to turn down the radio because I enjoy listening at a reasonable volume from nine to eleven.\n\nLawrence: [as Peter leaves to confess to Lumbergh about stealing money, knowing he may go to prison] Peter... watch out for your cornhole, bud.\n\n[Drunk, singing]\nSamir: Back up in your ass with the resurrection.\n\nBill Lumbergh: Oh, oh, and I almost forgot. Ahh, I'm also gonna need you to go ahead and come in on Sunday, too...\n\nPeter Gibbons: Look, I don't know about you guys, but I'm tired of being pushed around. Aren't you?\nSamir: Yes, Peter, but I'm not going to do anything illegal.\nPeter Gibbons: Illegal? Samir, this is America.\n\nPeter Gibbons: Boy, I'll tell ya, some days... One of these days it's just gonna be like...\n[He mimics the sound of a machine gun. Brian, a waiter, walks up and does the same and laughs]\nBrian, Chotchkie's Waiter: So can I get you gentlemen something more to drink? Or maybe something to nibble on? Some Pizza Shooters, Shrimp Poppers, or Extreme Fajitas?\nPeter Gibbons: Just coffee.\nBrian, Chotchkie's Waiter: Okay. Sounds like a case of the Mondays.\n\n[Peter is wearing shorts, sandals and a paisley shirt, with his feet up on his desk, munching chips and playing tetris on his computer]\nBill Lumbergh: So, Peter, what's happening? Aahh, now, are you going to go ahead and have those TPS reports for us this afternoon?\nPeter Gibbons: No.\nBill Lumbergh: Ah. Yeah. So I guess we should probably go ahead and have a little talk. Hmm?\nPeter Gibbons: Not right now, Lumbergh, I'm kinda busy. In fact, look, I'm gonna have to ask you to just go ahead and come back another time. I got a meeting with the Bobs in a couple of minutes.\nBill Lumbergh: I wasn't aware of a meeting with them.\nPeter Gibbons: Yeah, they called me at home.\n\nPeter Gibbons: [talking about the hypnotherapist he's about to see] Hey, he helped Anne lose weight.\nSamir: Peter, she's anorexic!\nPeter Gibbons: Yeah, the guy's really good.\n\nPeter Gibbons: Yeah, I know him. I know him! He's my boss! He's my unholy, disgusting pig of a boss!\nJoanna: He's not THAT disgusting.\nPeter Gibbons: He represents all that is soulless and wrong! And you slept with him!\n\nDrew: I'm thinking I might take that new chick from Logistics. If things go well I might be showing her my O-face. \"Oh... Oh... Oh!\" You know what I'm talkin' about. \"Oh!\"\n\nSamir: This is a... fuck!\n\nLawrence: We still goin' fishin' this weekend?\nPeter Gibbons: Nah, Lumbergh's gonna have me come in on Saturday, I just know it.\nLawrence: Well, you can get out of that easily.\nPeter Gibbons: Yeah? How?\nLawrence: Well, when a boss wants you to work on Saturday he generally asks you at the end of the day, right?\nPeter Gibbons: Yeah.\nLawrence: So, all you gotta do is avoid him... on the last few hours on Friday, duck out early, turn off your answering machine... you should be home free, man.\nPeter Gibbons: That's a really good idea.\nLawrence: Fuckin' A, man!\n\n[Peter, Michael, and Samir are chatting as they hang around the printer]\nPeter Gibbons: Our high school guidance counselor used to ask us what you'd do if you had a million dollars and you didn't have to work. And invariably what you'd say was supposed to be your career. So, if you wanted to fix old cars then you're supposed to be an auto mechanic.\nSamir: So what did you say?\nPeter Gibbons: I never had an answer. I guess that's why I'm working at Initech.\nMichael Bolton: No, you're working at Initech because that question is bullshit to begin with. If everyone listened to her, there'd be no janitors, because no one would clean shit up if they had a million dollars.\nSamir: You know what I would do if I had a million dollars? I would invest half of it in low risk mutual funds and then take the other half over to my friend Asadulah who works in securities...\nMichael Bolton: Samir, you're missing the point. The point of the exercise is that you're supposed to figure out what you would want to do if...\n[printer starts beeping]\nMichael Bolton: \"PC Load Letter\"? What the fuck does that mean?\n\nSamir: No, not again. I... why does it say paper jam when there is no paper jam? I swear to God, one of these days, I just kick this piece of shit out the window.\nMichael Bolton: You and me both, man. That thing is lucky I'm not armed.\nSamir: Piece of shit.\n\nMichael Bolton: We get caught laundering money, we're not going to white-collar resort prison. No, no, no. We're going to federal POUND ME IN THE ASS prison.\nSamir: I don't want to go to ANY prison!\n\nBob Slydell: Milton Waddams.\nDom Portwood: Who's he?\nBob Porter: You know, squirrely looking guy, mumbles a lot.\nDom Portwood: Oh, yeah.\nBob Slydell: Yeah, we can't actually find a record of him being a current employee here.\nBob Porter: I looked into it more deeply and I found that apparently what happened is that he was laid off five years ago and no one ever told him about it; but through some kind of glitch in the payroll department, he still gets a paycheck.\nBob Slydell: So we just went ahead and fixed the glitch.\nBill Lumbergh: Great.\nDom Portwood: So, uh, Milton has been let go?\nBob Slydell: Well, just a second there, professor. We, uh, we fixed the *glitch*. So he won't be receiving a paycheck anymore, so it'll just work itself out naturally.\nBob Porter: We always like to avoid confrontation, whenever possible. Problem is solved from your end.\n\nPeter Gibbons: What am I gonna do with 40 subscriptions to Vibe?\n\nJoanna: I dunno, it just seems wrong.\nPeter Gibbons: It's NOT wrong. INITECH is wrong. INITECH is an evil corporation, all right? Chochkies is wrong. Doesn't it bother you that you have to get up in the morning and you have to put on a bunch of pieces of flair?\nJoanna: Yeah, but I'm not about to go in and start taking money from the register.\nPeter Gibbons: Well, maybe you should. You know, the Nazis had pieces of flair that they made the Jews wear.\nJoanna: What?\n\nMilton Waddams: Mr. Lumbergh told me to talk to payroll and then payroll told me to talk to Mr. Lumbergh and I still haven't received my paycheck and he took my stapler and he never brought it back and then they moved my desk to storage room B and there was garbage on it...\n\nPeter Gibbons: [discussing the possibility of going to prison] This isn't Riyadh. You know they're not gonna saw your hands off here, alright? The worst they would ever do is they would put you for a couple of months into a white-collar, minimum-security resort! Shit, we should be so lucky! Do you know, they have conjugal visits there?\nSamir: Really?\nPeter Gibbons: Yes.\nMichael Bolton: Shit. I'm a free man and I haven't had a conjugal visit in six months.\n\nLawrence: [shouting through the wall from his apartment] Hey Peter, man, check out channel 9, check out this chick.\n\nRob Newhouse: Conjugal visits? Mmmm. Not that I know of. Y'know, minimum-security prison is no picnic. I have a client in there right now. He says the trick is: kick someone's ass the first day, or become someone's bitch. Then everything will be all right. W-Why do you ask, anyway?\n\nMichael Bolton: You think the pet rock was a really great idea?\nTom Smykowski: Sure it was. The guy made a million dollars. You know, I had an idea like that once. A long time ago.\nPeter Gibbons: Really, what was it, Tom?\nTom Smykowski: Well, all right. It was a \"Jump to Conclusions\" mat. You see, it would be this mat that you would put on the floor, and it would have different conclusions written on it that you could jump to.\n\nPeter Gibbons: So you guys are gonna fire Mike and Samir, and you're gonna give *me* more money?\nBob Porter: [nods] Uh-huh.\nPeter Gibbons: Wow.\n\nSamir: [trying to decide if he should go along with the virus plot] I have a question.\nPeter Gibbons: Yes?\nSamir: In... in these conjugal visits, you can have sex with women?\nPeter Gibbons: Yep, you sure can.\nSamir: OK, I'll do it.\n\nSamir: Is there some way to just give the money back?\nPeter Gibbons: What? You mean just hand them a check for the exact amount they're missing? I think they'd figure that out.\n\nPeter Gibbons: You know, corporate accounting is sure as hell gonna notice $305,326.13, Michael!\n\nPeter Gibbons: That's what I'm talkin' about when I talk about America!\n\nSteve: I lied. Um... All that stuff I said about being a crack head? It just helps me sell magazines. I'm actually an unemployed... software engineer.\nPeter Gibbons: You're a software engineer?\nSteve: Yup.\n[sighs]\nSamir: Things, uh... it must be very rough for you.\nSteve: Actually man, I make more money selling magazine subscriptions, than I ever did at Intertrode!\n\nBob Slydell: [telling Lumbergh who's going to be fired] There's two more people we can easily lose, and then there's Tom Smykowski... He's useless.\n[laughs]\nBob Slydell: Gone.\n\nDrew: Hey, isn't that the girl that works over at Chotchkie's?\nPeter Gibbons: Yeah.\nDrew: Hmmm. Who's SHE here with?\nPeter Gibbons: She's with me.\nDrew: Really?\nPeter Gibbons: Yeah.\nDrew: All right, Peter! Ooh! Ooh! Right on... Make sure you wear a rubber, dude.\nPeter Gibbons: Why is that, Drew?\nDrew: Are you kidding me? She gets around. All right?\nPeter Gibbons: She does, does she?\nDrew: Oh, yeah. Like a record.\nPeter Gibbons: Like, with who?\nDrew: Oh, let's see, uh... Hell, Lumbergh fucked her. Ha ha ha. Oh, let me see who else...\n\nPeter Gibbons: [Explaining the plan] Alright so when the sub routine compounds the interest is uses all these extra decimal places that just get rounded off. So we simplified the whole thing, we rounded them all down, drop the remainder into an account we opened.\nJoanna: [Confused] So you're stealing?\nPeter Gibbons: Ah no, you don't understand. It's very complicated. It's uh it's aggregate, so I'm talking about fractions of a penny here. And over time they add up to a lot.\nJoanna: Oh okay. So you're gonna be making a lot of money, right?\nPeter Gibbons: Yeah.\nJoanna: Right. It's not yours?\nPeter Gibbons: Well it becomes ours.\nJoanna: How is that not stealing?\nPeter Gibbons: [pauses] I don't think I'm explaining this very well.\nJoanna: Okay.\nPeter Gibbons: Um... the 7-11. You take a penny from the tray, right?\nJoanna: From the cripple children?\nPeter Gibbons: No that's the jar. I'm talking about the tray. You know the pennies that are for everybody?\nJoanna: Oh for everybody. Okay.\nPeter Gibbons: Well those are whole pennies, right? I'm just talking about fractions of a penny here. But we do it from a much bigger tray and we do it a couple a million times.\n\nBrian, Chotchkie's Waiter: Get a room, you two.\nJoanna: I hate that guy.\n\nJoanna: How dare you judge me? I mean what are you? You think you're some kind of, like, angel here? No, you're just this penny-stealing... wanna-be criminal... man.\nPeter Gibbons: Yeah, well, that may be. But at least I never slept with Lumbergh.\n\nJoanna: Why don't you just call me when you grow up! Oh, wait, you know what, that's probably never gonna happen, so just don't call me, OK?\n[Joanna starts to close car door]\nPeter Gibbons: Say hello to Lumbergh for me!\n\nMichael Bolton: Tom, every week you say you're going to lose your job and you're still here.\nTom Smykowski: Not this time. I'll bet I'm the first one laid off! Just the thought of having to go to the state unemployment office and stand in line with those SCUMBAGS...\n\nPeter Gibbons: What if we're still doing this when we're fifty?\nSamir: It would be nice to have that kind of job security.\n\nLawrence: Doesn't that chick look like Anne?\nPeter Gibbons: Yeah, a little bit...\nLawrence: Hey, she hasn't been over here in a while. You two still goin' out?\nPeter Gibbons: Yeah. I guess... I don't know. Sometimes I get the feeling like she's cheating on me.\nLawrence: Yeah, I get that feeling too, man.\nPeter Gibbons: What do you mean by that?\nLawrence: I don't know, man. I just get that feeling lookin' at her like she's the type of chick that just...\n[shudders]\n";

export default Ember.Route.extend({
  model: function() {
    // This is where you can load data via promises (E.G. rest service)
    var mainQuotes = Ember.A([]);
    // Chopping local data into model
    var quotesGroupArray = Ember.A(quotes.split('\n\n'));
    quotesGroupArray.forEach(function(item) {
      var dialogArray = item.split('\n');
      mainQuotes.pushObject(dialogArray);
    });

    characters.forEach(function(character) {
      var name = character.name;
      character.quotes = Ember.A();
      mainQuotes.forEach(function(quoteDialogArray) {
        quoteDialogArray.every(function(lineQuote) {
          if (lineQuote.startsWith(name)) {
            console.log('inserting', quoteDialogArray);
            character.quotes.pushObject(quoteDialogArray);
            return false;
          }
        });
      });
    });

    return characters;
  }
});
