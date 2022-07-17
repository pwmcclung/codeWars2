from itertools import permutations as pm
from typing import List


def permutations(string: str) -> List[str]:
    return sorted([''.join(letter) for letter in set(pm(string))])