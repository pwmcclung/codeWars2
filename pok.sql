SELECT pokemon_name,(str*multiplier) as modifiedStrength, element 
FROM pokemon 
LEFT JOIN multipliers ON multipliers.id = element_id
WHERE str*multiplier >= 40
ORDER BY modifiedStrength DESC;