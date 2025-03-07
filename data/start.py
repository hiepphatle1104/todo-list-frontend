import json
from faker import Faker
from datetime import datetime
import random
import uuid

fake = Faker()

def generate_fake_todo():
    return {
        "todoId": str(uuid.uuid4()),
        "title": fake.sentence(nb_words=4),
        "description": fake.paragraph(),
        "deadline": fake.future_datetime(end_date="+30d").isoformat(),
        "attachFile": fake.file_path(extension="pdf") if random.choice([True, False]) else None,
        "username": fake.user_name(),
        "userId": str(uuid.uuid4()),
        "priority": random.choice(["high", "low", "medium"]),
        "status": random.choice(["done", "in-progress", "todo", "on-hold"]),
    }

# Tạo danh sách Todo
todos = [generate_fake_todo() for i in range(1, 11)]  # 10 todo giả lập

# Ghi vào file JSON
with open("todos.json", "w", encoding="utf-8") as f:
    json.dump(todos, f, indent=2)

print("✅ Đã ghi vào todos.json")
