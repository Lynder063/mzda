--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6 (Debian 15.6-0+deb12u1)
-- Dumped by pg_dump version 15.6 (Debian 15.6-0+deb12u1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shifts; Type: TABLE; Schema: public; Owner: mzda
--

CREATE TABLE public.shifts (
    id integer NOT NULL,
    date date NOT NULL,
    start_time time without time zone NOT NULL,
    end_time time without time zone NOT NULL
);


ALTER TABLE public.shifts OWNER TO mzda;

--
-- Name: shifts_id_seq; Type: SEQUENCE; Schema: public; Owner: mzda
--

ALTER TABLE public.shifts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.shifts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: shifts; Type: TABLE DATA; Schema: public; Owner: mzda
--

COPY public.shifts (id, date, start_time, end_time) FROM stdin;
3	2024-06-03	06:11:00	14:19:00
4	2024-05-27	06:13:00	11:40:00
5	2024-05-28	06:13:00	11:40:00
6	2024-05-13	06:13:00	11:40:00
7	2024-05-10	06:13:00	11:40:00
\.


--
-- Name: shifts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: mzda
--

SELECT pg_catalog.setval('public.shifts_id_seq', 7, true);


--
-- Name: shifts shifts_pkey; Type: CONSTRAINT; Schema: public; Owner: mzda
--

ALTER TABLE ONLY public.shifts
    ADD CONSTRAINT shifts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

