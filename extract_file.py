import re
class FileNameExtractor:
    @staticmethod
    def extract_file_name(dirty_file_name):
        file = re.match(r'\d+_(.+?\..+?)\.', dirty_file_name).group(1)
        return file