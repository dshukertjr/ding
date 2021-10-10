# Ding

A simple party quiz app where a host can create sequence of quizzes and players can compete to see who can answer them the quickest. 

## Figma

https://www.figma.com/file/oPdWdleBT7JY7vmvjWombD/Untitled?node-id=0%3A1

## SQL

```sql

create table if not exists public.rooms (
    id uuid not null primary key default uuid_generate_v4 (),
    user_id uuid references auth.users on delete cascade not null,
    created_at timestamp with time zone default timezone('utc' :: text, now()) not null,
    code varchar(4) not null,
    is_closed boolean not null default false
);

create table if not exists public.questions (
    id uuid not null primary key default uuid_generate_v4 (),
    room_id uuid references public.rooms on delete cascade not null,
    question text not null,
    answer int2 not null
);

create table if not exists public.choices (
    id uuid not null primary key default uuid_generate_v4 (),
    question_id uuid references public.questions on delete cascade not null,
    index int2 not null,
    choice text not null
);

```