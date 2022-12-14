def to_imparfait(verb_phrase):
    v_p = verb_phrase[:-2]
    if verb_phrase[:2] == 'Je':
        v_p += 'ais'
    elif verb_phrase[:2] == 'Tu':
        v_p += 'ais'
    elif verb_phrase[:2] == 'Il' and verb_phrase[2] == ' ':
        v_p += 'ait'
    elif verb_phrase[:2] == 'On':
        v_p += 'ait'
    elif verb_phrase[:4] == 'Elle'and verb_phrase[4] == ' ':
        v_p += 'ait'
    elif verb_phrase[:4] == 'Nous':
        v_p += 'ions'
    elif verb_phrase[:4] == 'Vous':
        v_p += 'iez'
    elif verb_phrase[:3] == 'Ils' and verb_phrase[2] == 's':
        v_p += 'aient'
    elif verb_phrase[:5] == 'Elles'and verb_phrase[4] == 's':
        v_p += 'aient'
    return v_p
    